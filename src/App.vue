<template>
    <div id="app" class="default-theme">
        <PageHeader/>
        <ContentContainer/>
    </div>
</template>

<script>
    import PageHeader from "./components/PageHeader";
    import ContentContainer from "./components/ContentContainer";

    export default {
        name: 'App',
        components: {
            ContentContainer,
            PageHeader
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;

        .page-wrap {
            border: 1px solid $panel-border;
            padding: 5px;
            background: $page-bg;
        }
    }
</style>
