<template>
    <div :class="['r', withCellSeparator ? 'with-separators' : '']">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Row",
        props: {
            withCellSeparator: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">

</style>