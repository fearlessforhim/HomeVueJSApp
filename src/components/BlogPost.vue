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
            <div class="more-link"
                 @click="titleClicked"
            >
                Continue Reading...
            </div>
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
                let content = this.post.content;
                if (content) {
                    let regex = /(?:\r\n|\r|\n)/g;
                    let result, finalIndex = 0;
                    while ((result = regex.exec(content)) && finalIndex === 0) {
                        if (result.index >= 1000) {
                            finalIndex = result.index
                        }
                    }
                    return content.substring(0, finalIndex).replace(regex, '<br>') + '..'
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
                line-height: 26px;
                text-align: justify;
                font-size: 18px
            }

            .more-link {
                font-style: italic;
                color: blue;
                cursor: pointer;
                text-decoration: underline;
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