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
    transform-origin: 0 40px;
    text-align: right;
    position: absolute;
    top: 380px;
    left: 50%;
    width: 320px;
    height: 80px;
    .numeral-wrap {
      font-size: 60px;
      font-weight: bold;
      color: white;
      display: inline-block;
      transform-origin: 40px 40px;
      padding: 0 0px 0px 0;
      height: 80px;
      width: 80px;
      text-align: center;
    }
  }
</style>