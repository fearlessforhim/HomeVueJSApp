<template>
    <div class="post-item">
        <div class="post-title">
            {{post.title}} - <span class="date-created">{{post.dateCreated | moment('MMMM DD, YYYY')}}</span>
        </div>
        <div class="post-content">
            {{post.content}}
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

        .date-created {
            color: #c2c2c2;
        }
    }
</style>