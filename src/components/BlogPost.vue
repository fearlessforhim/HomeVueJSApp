<template>
    <div class="post-item">
        <div class="post-title-wrap">
            <span
                    class="post-title"
                    @click="titleClicked"
            >
                {{post.title}}
            </span>
            <div class="date-created">{{post.dateCreated | moment('MMMM DD, YYYY')}}</div>
        </div>
        <div class="post-content">
            <p v-html="formattedContent"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogPost",
        props: {
            post: {
                type: Object,
                required: true
            }
        },
        computed: {
            formattedContent() {
                if (this.post.content) {
                    return this.post.content.replace(/(?:\r\n|\r|\n)/g, '<br>')
                }
                return '';
            }
        },
        methods: {
            titleClicked() {
                window.location = `/blog/post?id=${this.post.id}`
            }
        }
    }
</script>

<style scoped lang="scss">
    .post-item {
        margin: 0 90px 0 0;
        max-height: 300px;
        overflow: hidden;

        .post-title {
            font-size: 24px;
            cursor: pointer;

            &:hover {
                color: $app-theme-base;
            }
        }

        .post-content {
            border-top: 1px solid $panel-border;
            padding: 10px;

            > p {
                line-height: 24px;
                text-align: justify;
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