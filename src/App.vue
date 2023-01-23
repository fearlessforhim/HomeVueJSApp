<template>
  <div id="app">
      <div class="page-container">
          <router-view/>
      </div>
  </div>
</template>

<script>
  import PageHeader from "./components/PageHeader.vue";

  export default {
      name: 'App',
      components: {
          PageHeader
      }
  }
</script>

<style lang="scss">
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  @media only screen and (max-width: 600px) {
      #app .page-container {
          padding: 90px 0;
      }
  }
</style>
