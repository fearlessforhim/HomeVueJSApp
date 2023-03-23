<template>
  <div id="app">
      <div class="page-container">
          <router-view/>
      </div>
  </div>
</template>

<script>
  import PageHeader from "./components/blog/PageHeader.vue";

  export default {
      name: 'App',
      components: {
          PageHeader
      }
  }
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
    }
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      height: 100%;
  }

  .page-container {
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
      #app .page-container {
          padding: 90px 0;
      }
  }
</style>
