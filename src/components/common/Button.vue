<template>
    <div
            class="btn"
            @click="clicked"
    >
        <span class="btn-text">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: {
                type: String,
                required: true
            }
        },
        methods: {
            clicked: function(event) {
                this.$emit('click', this.page, event);
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn {
        padding: 5px;
        cursor: pointer;
        text-align: center;
        color: white;

        &:hover {
        }
    }
</style>