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
    export default {
        name: "SingleBlogPost",
        components: {SidePanel},
        data() {
            return {
                post: {}
            }
        },
        mounted() {
            console.log(this.$route.query.id);
            this.axios.get(`/api/blog/getPost?id=${this.$route.query.id}`)
                .then((response) => {
                    this.post = response.data;
                });
        }
    }
</script>

<style scoped lang="scss">
</style>