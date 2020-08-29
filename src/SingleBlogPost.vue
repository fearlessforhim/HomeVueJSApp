<template>
    <div class="main-blog-wrap">
        <j-row>
            <j-cell
                    :c="9"
            >
                <div>Here's the post!</div>
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
    import SidePanel from "./components/SidePanel";
    import PostContainer from "./components/PostContainer";
    export default {
        name: "SingleBlogPost",
        components: {PostContainer, SidePanel}
    }
</script>

<style scoped lang="scss">
</style>