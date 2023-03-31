<template>
    <div class="blockoo-container">
        Blockoo!
        <div
        class="row"
        v-for="(row, ridx) in boardState"
        >
            <div
                v-for="(cell, cidx) in row"
                class="cell"
                :style="{color: 'black', backgroundColor: players[parseInt(cell)]?.color}"
            >
                {{ cidx }},{{ ridx }}
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios"

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
axios.defaults.xsrfCookieName = 'csrftoken';

function getCookie(name) {
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');

        const fullCookie = cookies.map(c => c.trim()).filter(c => c.substring(0, name.length + 1) === (name + '='))[0]
        return decodeURIComponent(fullCookie.substring(name.length + 1))
    }
    return null;
}

export default {
    name: "Blockoo",
    data() {
        return {
            boardState: [],
            players: []
        }
    },
    props: {
        token: String
    },
    mounted() {
        
        Promise.all([
            axios.get("http://localhost:8000/blockoo/getBoardState/0"),
            axios.get("http://localhost:8000/blockoo/getPlayers/0"),            
            axios.post("http://localhost:8000/blockoo/placePiece/0", { player: 0, posX:0, posY: 0, piece: '03535', rotation: 0 })
        ])
        .then((response) => {
            this.boardState = response[0].data
                .boardState.split('\n')
                .map(a => {
                    console.log(a);
                    return a.split('|')
                });
            this.players = response[1].data.sort((a,b) => a.id - b.id);
        })
            .catch((e) => {
                console.log('error');
                console.log(e);
            });

        
    }

}
</script>
  
<style scoped lang="scss">

.blockoo-container {
    padding: 10px;
}
.row {
    display: flex;

    & + .row {
        margin-top: 2px
    }

    .cell {
        padding: 5px;
        border: 1px solid black;

        & + .cell {
            margin-left: 2px;
        }
    }
}
</style>