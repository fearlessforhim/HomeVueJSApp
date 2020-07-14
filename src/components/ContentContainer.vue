<template>
    <div class="content-container">
        <j-row>
            <j-cell
                    :c="9"
            >
                <PostContainer/>
            </j-cell>
            <j-cell
                    :c="3"
            >
                <SidePanel/>
            </j-cell>
        </j-row>
    </div>
</template>

<script>
    import SidePanel from "./SidePanel";
    import PostContainer from "./PostContainer";
    export default {
        name: "ContentContainer",
        components: {PostContainer, SidePanel}
    }
</script>

<style scoped lang="scss">
    .content-container {
        padding: 90px;
    }
</style>