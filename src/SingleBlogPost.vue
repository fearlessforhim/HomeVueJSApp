<template>
    <div class="main-blog-wrap">
        <j-row>
            <j-cell
                    :c="9"
            >
                <BlogPost
                        :post="post"
                />
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
    import BlogPost from "./components/BlogPost";

    export default {
        name: "SingleBlogPost",
        components: {BlogPost, SidePanel},
        data() {
            return {
                post: {}
            }
        },
        mounted() {
            this.axios.get(`/api/blog/getPost?id=${this.$route.query.id}`)
                .then((response) => {
                    this.post = response.data;
                });
        }
    }
</script>

<style scoped lang="scss">
</style>