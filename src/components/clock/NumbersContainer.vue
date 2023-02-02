<template>
    <div class="numbers-container">
         <Numeral
          text="12"
          :rotate="-90"
        />
        <Numeral
          text="1"
          :rotate="-60"
        />
        <Numeral
          text="2"
          :rotate="-30"
        />
        <Numeral
          text="3"
          :rotate="0"
        />
        <Numeral
          text="4"
          :rotate="30"
        />
        <Numeral
          text="5"
          :rotate="60"
        />
        <Numeral
          text="6"
          :rotate="90"
        />
        <Numeral
          text="7"
          :rotate="120"
        />
        <Numeral
          text="8"
          :rotate="150"
        />
        <Numeral
          text="9"
          :rotate="180"
        />
        <Numeral
          text="10"
          :rotate="210"
        />
        <Numeral
          text="11"
          :rotate="240"
        />
    </div>
</template>

<script>
import Numeral from "./Numeral.vue"
    export default {
        name: "NumbersContainer",
        components: {Numeral}

    }
</script>

<style scoped lang="scss">
.numbers-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}
  
</style>