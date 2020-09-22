<template>
    <div class="main-blog-wrap">
        <j-row>
            <j-cell
                    :c="9"
            >
                <div class="single-post-item">
                    <div class="post-title-wrap">
            <span
                    class="post-title"
            >
                {{post.title}}
            </span>
                        <div class="date-created">{{post.dateCreated | moment('MMMM DD, YYYY')}}</div>
                    </div>
                    <div class="post-content">
                        <p v-html="formattedContent"></p>
                    </div>
                </div>
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
        computed: {
            formattedContent() {
                if(this.post.content) {
                    return this.post.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
                }
                return '';
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