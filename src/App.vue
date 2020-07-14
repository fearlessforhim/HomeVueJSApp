<template>
    <div id="app">
        <PageHeader/>
        <div class="page-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import PageHeader from "./components/PageHeader";

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

        .page-container {
            padding: 90px;
        }
    }
</style>
