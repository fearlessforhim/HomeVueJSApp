<template>
    <div class="post-item">
        <div class="post-title-wrap">
            <span class="post-title">{{post.title}}</span>
            <div class="date-created">{{post.dateCreated | moment('MMMM DD, YYYY')}}</div>
        </div>
        <div class="post-content">
            <p v-html="post.content"></p>
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
        }
    }
</script>

<style scoped lang="scss">
    .post-item {
        width: 800px;
        margin: auto;

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
</style>