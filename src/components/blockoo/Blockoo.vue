<template>
    <div class="blockoo-container">
        <div
            class="board-display-wrap"
        >
            <div
                class="board-display"
            >
                <div
                class="row"
                v-for="(row, ridx) in boardState"
                >
                    <div
                        class="cell-wrap"
                        v-for="(cell, cidx) in row"
                    >
                        <div
                            :class="`cell ${parseInt(cell) > -1 ? 'filled' : 'unfilled'}`"
                            :style="{
                                backgroundColor: parseInt(cell) > -1 ? players[parseInt(cell)].color : '#DEDEDE',
                                borderColor: parseInt(cell) > -1 ? darken(players[parseInt(cell)]?.color) : '#444',
                                borderStyle: 'solid',
                                borderWidth: parseInt(cell) > -1 ? '2px' : '1px',
                                boxShadow: parseInt(cell) > -1 ? 'none' : 'inset 2px 2px #AAA'

                            }"
                            @click="placePiece(cidx, ridx)"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="piece-player-control"
            v-if="!gameIsOver"
        >
            <div class="player-actions">
                <div
                    class="btn"
                    title="Rotate"
                    @click="incrementRotation()"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-redo"
                    />
                </div>
                <div
                    class="btn"
                    title="Mirror"
                    @click="toggleMirror()"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-signs-post"
                    />
                </div>
                <div
                    class="btn"
                    title="No more moves"
                    @click="finishPlayer()"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-flag-checkered"
                    />
                </div>
            </div>
            <div>
                Current Player: {{ players[this.activePlayer]?.color }}
            </div>
            <div
                v-if="errorMessage"
            >
                Error: {{ errorMessage }}
            </div>
            <div class="piece-displays">
                <div>
                    <PieceExampleDisplay
                        v-for="piece in players[activePlayer]?.pieceSet.slice(0, 7)"
                        :piece-id="piece"
                        :is-selected="piece === this.selectedPiece"
                        :color="players[this.activePlayer]?.color"
                        :rotation-mod="this.pieceRotationState"
                        :is-mirrored="this.mirrored"
                        @click="this.selectedPiece = piece"
                    />
                </div>
                <div>
                    <PieceExampleDisplay
                        v-for="piece in players[activePlayer]?.pieceSet.slice(7,14)"
                        :piece-id="piece"
                        :is-selected="piece === this.selectedPiece"
                        :color="players[this.activePlayer]?.color"
                        :rotation-mod="this.pieceRotationState"
                        :is-mirrored="this.mirrored"
                        @click="this.selectedPiece = piece"
                    />
                </div>
                <div>
                    <PieceExampleDisplay
                        v-for="piece in players[activePlayer]?.pieceSet.slice(14)"
                        :piece-id="piece"
                        :is-selected="piece === this.selectedPiece"
                        :color="players[this.activePlayer]?.color"
                        :rotation-mod="this.pieceRotationState"
                        :is-mirrored="this.mirrored"
                        @click="this.selectedPiece = piece"
                    />
                </div>
            </div>
        </div>
        <div
            class="final-score"
            v-else
            >
            <div
                class="player-score"
                v-for="k in Object.keys(finalScore)"
                >
                {{ k }} {{ finalScore[k] }}
            </div>
        </div>
        <div
            class="game-control"
        >
            <div
                class="btn"
                @click="performGameReset()"
            >
                Reset Game
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import PieceExampleDisplay from "./PieceExampleDisplay.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import tinycolor from "tinycolor2";

export default {
    name: "Blockoo",
    components: {PieceExampleDisplay, FontAwesomeIcon},
    data() {
        return {
            boardState: [],
            players: [],
            activePlayer: -1,
            pieceRotationState: 0,
            selectedPiece: "",
            mirrored: false,
            gameIsOver: false,
            finalScore: {},
            errorMessage: ''
        };
    },
    props: {
        token: String
    },
    methods: {
        async placePiece(posX, posY) {
            this.errorMessage = '';
            if (!this.selectedPiece)
                return;
            const response = await axios.post("http://localhost:8000/blockoo/gameAction/0/placePiece/", {
                player: this.activePlayer,
                posX: posX,
                posY: posY,
                piece: this.selectedPiece,
                rotation: this.pieceRotationState,
                mirrored: this.mirrored
            });
            const data = response.data;
            if (data.isError) {
                this.errorMessage = data.message;
                return;
            }
            this.loadState();
        },
        loadState() {
            Promise.all([
                axios.get("http://localhost:8000/blockoo/gameAction/0/getBoardState/"),
                axios.get("http://localhost:8000/blockoo/gameAction/0/getPlayers/"),
            ])
                .then((response) => {
                let boardState = response[0].data.boardState;
                this.gameIsOver = boardState.gameIsOver;
                this.finalScore = response[0].data.finalScore;
                this.activePlayer = boardState.activePlayerInGameId;
                this.boardState = boardState
                    .boardState.split("\n")
                    .map(a => {
                    return a.split("|");
                });
                this.players = response[1].data.sort((a, b) => a.id - b.id);
                const currentPlayersPieceSet = this.players[this.activePlayer].pieceSet;
                this.selectedPiece = currentPlayersPieceSet[currentPlayersPieceSet.length - 1];
            })
                .catch((e) => {
                console.log("error");
                console.log(e);
            });
        },
        incrementRotation() {
            if (this.pieceRotationState >= 3) {
                this.pieceRotationState = 0;
            }
            else {
                this.pieceRotationState++;
            }
        },
        toggleMirror() {
            this.mirrored = !this.mirrored;
        },
        async finishPlayer() {
            await axios.post("http://localhost:8000/blockoo/gameAction/0/finishPlayer/")
            this.loadState();
        },
        async performGameReset() {
            const response = await axios.post("http://localhost:8000/blockoo/gameAction/0/gameReset/")
            this.loadState();
        },
        darken(color){
            return tinycolor(color).darken(15).toString();
        }
    },
    mounted() {
        this.loadState();
    },
    components: { PieceExampleDisplay }
}
</script>
  
<style scoped lang="scss">

.player-actions {
    display: flex;

    > div {
        flex: 1;

        & + div {
            margin-left: 10px;
        }
    }
}

.btn {
    background-color: rgb(57, 57, 228);
    color: white;
    padding: 10px;
    font-size: 14px;
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    
    &:hover {
        background-color: rgb(38, 38, 139);
    }
}

.blockoo-container {
    padding: 10px;
    display: flex;

    > div + div {
        margin-left: 10px;
    }

    .board-display {
        border-top: 10px solid lightgrey;
        border-left: 10px solid gray;
        border-right: 10px solid rgb(228, 228, 228);
        border-bottom: 10px solid rgb(165, 165, 165);
    }
}

.piece-displays {
    display: flex;

    > div + div {
        margin-left: 10px;
    }
}

.row {
    display: flex;

    & + .row {
        // margin-top: 2px
    }

    .cell-wrap {
        height: 36px;
        width: 36px;
        // border-left: 1px solid black;
        // border-top: 1px solid black;

        &:last-of-type {
            // border-right: 1px solid black;
        }
    }

    .cell {
        width: 100%;
        height: 100%;
        // padding: 15px;

        // &.filled {
        //     margin-left: 0px;
        // }

        // &.unfilled {
        //     box-shadow: inset 2px 2px #999;
        // }

        // & + .cell {
        //     margin-left: 2px;
        // }
    }
}
</style>