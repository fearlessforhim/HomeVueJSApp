<template>
        <div class="numeral-rotator" :style="`transform: rotate(${this.rotate}deg)`">
          <div class="numeral-wrap" :style="`transform: rotate(${-this.rotate}deg)`">{{this.text}}</div>
      </div>
</template>

<script>
    export default {
        name: "Numeral",
        props: {
          text: String,
          rotate: Number
        }

    }
</script>

<style scoped lang="scss">
  .numeral-rotator {
    transform-origin: 0 120px;
    text-align: right;
    position: absolute;
    top: 41%;
    left: 50%;
    width: 19%;
    .numeral-wrap {
      font-size: 150px;
      font-weight: bold;
      color: white;
      display: inline-block;
    }
  }
</style>