<template>
    <div class="post-container">
        <BlogPost
                v-for="(p) in posts"
                :key="p.id"
                :post="p"
        />
    </div>
</template>

<script>
    import BlogPost from "./BlogPost";
    export default {
        name: "PostContainer",
        components: {
            BlogPost
        },
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.axios.get("/api/blog/getPosts")
            .then((response) => {
                this.posts = response.data;
            });
        }
    }
</script>

<style scoped lang="scss">

    /deep/ .post-item + .post-item {
        margin-top: 40px;
    }

</style>