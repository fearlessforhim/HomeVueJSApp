<template>
    <div :class="['c', 'c' + c, 'mc' + mc]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Cell",
        props: {
            c: {
                type: Number,
                required: true
            },
            mc: {
                type: Number,
                required: false,
                default: 12
            }
        }
    }
</script>

<style scoped lang="scss">
    .c:empty {
        height: 50px;
    }
</style>