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
                if (this.post.content) {
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
    .single-post-item {
        margin: 0 90px 0 0;

        .post-title {
            font-size: 24px;
        }

        .post-content {
            border-top: 1px solid $panel-border;
            padding: 10px;

            > p {
                line-height: 26px;
                text-align: justify;
                font-size: 18px
            }
        }

        .date-created {
            color: darken($panel-border, 10%);
            float: right;
            padding-top: 10px;
        }
    }

    @media only screen and (max-width: 600px) {
        .post-item {
            margin: 0;
            padding: 10px;

            .post-content {
                font-size: 20px;
            }
        }
    }
</style>