<template>
    <div
            class="header-wrap"
    >
        <div
                class="blog-title"
        >
            Four In Faith
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",
        data: function () {
            return {
                time: new Date(),
                user: 'joe_user',
                menuIsOpen: false
            }
        },
        created() {
            this.startTimer();
        },
        methods: {
            startTimer() {
                this.time = new Date();
                setTimeout(this.startTimer, 100);
            }
        }
    }
</script>

<style scoped lang="scss">
    .header-wrap {
        background: black;
        color: white;
        font-size: 36px;
        padding: 10px;
    }
</style>