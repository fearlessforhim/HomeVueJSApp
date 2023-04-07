<template>
    <div :class="`piece-example-wrap ${this.isSelected ? 'selected' : ''}`">
        <div
            class="piece-example-row"
            v-for="(row, ridx) in displayArray"
            >
                <div
                    v-for="(cell, cidx) in row"
                    :class="`piece-example-cell ${displayArray[cidx][ridx] == 1 ? 'source' : ''}`"
                    :style="{backgroundColor: displayArray[cidx][ridx] > 0 ? color : 'white'}"
                ></div>
            </div>
    </div>
</template>
<script>
export default {
    name: "PieceExampleDisplay",
    data() {
        return {
            movements: {
                "0" : {
                    x: 0,
                    y: 0
                },
                "1" : {
                    x: 0,
                    y: -1
                },
                "2" : {
                    x: 1,
                    y: -1
                },
                "3" : {
                    x: 1,
                    y: 0
                },
                "4" : {
                    x: 1,
                    y: 1
                },
                "5" : {
                    x: 0,
                    y: 1
                },
                "6" : {
                    x: -1,
                    y: 1
                },
                "7" : {
                    x: -1,
                    y: 0
                },
                "8" : {
                    x: -1,
                    y: -1
                },
            }
        }
    },
    props: {
        pieceId: String,
        color: String,
        rotationMod: Number,
        isMirrored: Boolean,
        isSelected: Boolean
    },
    computed: {
        sourceCoords() {
            let x = 0, y = 0;
            switch(this.rotationMod){
                case 0:
                    x = 0;
                    y = 0;
                    break;
                case 1:
                    x = 4;
                    y = 0;
                    break;
                case 2:
                    x = 4;
                    y = 4;
                    break;
                case 3:
                    x = 0;
                    y = 4;
                    break;
            }

            if(this.pieceId === '03146'){
                switch(this.rotationMod){
                    case 0:
                        x = 0;
                        y = 1;
                        break;
                    case 1:
                        x = 3;
                        y = 0;
                        break;
                    case 2:
                        x = 4;
                        y = 3;
                        break;
                    case 3:
                        x = 1;
                        y = 4;
                        break;
                }
            }
        return {x : x, y:y};
        },
        displayArray() {
            let moveCount = 0;
            let usedCoordinates = [];
            let rtv = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];

            let x = 0, y = 0;
            switch(this.rotationMod){
                case 0:
                    x = 0;
                    y = 0;
                    break;
                case 1:
                    x = 4;
                    y = 0;
                    break;
                case 2:
                    x = 4;
                    y = 4;
                    break;
                case 3:
                    x = 0;
                    y = 4;
                    break;
            }

            if(this.pieceId === '03146'){
                switch(this.rotationMod){
                    case 0:
                        x = 0;
                        y = 1;
                        break;
                    case 1:
                        x = 3;
                        y = 0;
                        break;
                    case 2:
                        x = 4;
                        y = 3;
                        break;
                    case 3:
                        x = 1;
                        y = 4;
                        break;
                }
            }

            // rtv[x][y] = ++moveCount;

            this.pieceId.split('').forEach(s =>{
                let movement = this.movements[s];
                let preX = movement.x
                let preY = movement.y

                if (this.rotationMod == 3){
                    preX = preX * -1
                    let intermediary = preX
                    preX = preY
                    preY = intermediary
                } else if(this.rotationMod == 2){
                    preX = preX * -1
                    preY = preY * -1
                } else if(this.rotationMod == 1){
                    preY = preY * -1
                    let intermediary = preX
                    preX = preY
                    preY = intermediary
                }

                if(this.isMirrored){
                    preX = preX * -1
                }

                x += preX
                y += preY
                usedCoordinates.push({
                    x: x,
                    y: y,
                    moveCount: ++moveCount
                });
            });

            console.log(usedCoordinates);

            while(this.hasNegativeValue(usedCoordinates, "x")){
                usedCoordinates.forEach(c => {
                    c['x']++;
                });
            }

            while(this.hasNegativeValue(usedCoordinates, "y")){
                usedCoordinates.forEach(c => {
                    c['y']++;
                });
            }

            while(this.hasExceedingValue(usedCoordinates, "x")){
                usedCoordinates.forEach(c => {
                    c['x']--;
                });
            }

            while(this.hasExceedingValue(usedCoordinates, "y")){
                usedCoordinates.forEach(c => {
                    c['y']--;
                });
            }

            usedCoordinates.forEach(c => {
                rtv[c.x][c.y] = c.moveCount;
            });

            return rtv;
        }
    },
    methods: {
        hasNegativeValue(coords, key) {
            return coords.filter(c => c[key] < 0).length > 0;            
        },
        hasExceedingValue(coords, key) {
            return coords.filter(c => c[key] > 4).length > 0;            
        }
    }
}
</script>
<style scoped lang="scss">

.piece-example-wrap {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid transparent;

    &:hover {
        background-color: gray;
    }

    &.selected {
        border: 1px solid black;
    }
}

.piece-example-row {
    display: flex;
}

.piece-example-cell {
    padding: 6px;
    border: 1px solid gray;
}

.source {
    position: relative;
}

.source::after{
    content: " ";
    background: white;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    height: 6px;
    width: 6px;
    position: absolute;
}
</style>