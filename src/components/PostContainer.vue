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
            this.axios.get("http://localhost:8000/blog/getPosts")
            .then((response) => {
                this.posts = response.data.map(p => Object.assign(p, {content: p.content.replace(/(?:\r\n|\r|\n)/g, '<br>')}));
            });
        }
    }
</script>

<style scoped lang="scss">

    /deep/ .post-item + .post-item {
        margin-top: 40px;
    }

</style>