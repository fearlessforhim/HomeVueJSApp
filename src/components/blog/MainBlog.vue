<template>
    <PageHeader/>
    <div class="main-blog-wrap">
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
    import PageHeader from "./PageHeader.vue"
    import SidePanel from "./SidePanel.vue";
    import PostContainer from "./PostContainer.vue";
    export default {
        name: "MainBlog",
        components: {PostContainer, SidePanel, PageHeader}
    }
</script>

<style scoped lang="scss">

.main-blog-wrap {
    padding : 90px;
}
</style>