<template>
    <div class="side-panel">
        <div class="side-panel-title">
            Connect With Me
        </div>
        <div class="media-row"
             v-for="c in connections"
             :key="c.href"
             @click="c.onClick"
        >
            <span class="media-icon"><i :class="['fa', c.faIcon]"></i></span>
            <span class="media-text">{{c.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SidePanel",
        data() {
            return {
                connections: [
                    {
                        faIcon: 'fa-twitter',
                        text: '@jr_cameron',
                        onClick: () => {window.open('https://twitter.com/jr_cameron')}
                    },{
                        faIcon: 'fa-at',
                        text: 'jonathancameron6@protonmail.com',
                        onClick: () => {window.open("mailto:jonathancameron6@protonmail.com", "_self");}
                    },{
                        faIcon: 'fa-linkedin',
                        text: 'Jonathan Cameron',
                        onClick: () => {window.open('https://www.linkedin.com/in/jonathan-cameron-45388a52/')}
                    },
                    {
                        faIcon: 'fa-github',
                        text: 'fearlessforhim',
                        onClick: () => {window.open('https://github.com/fearlessforhim')}
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .side-panel {
        border-left: 3px solid $panel-border;
        padding: 20px;

        .side-panel-title {
            font-size: 24px;
        }

        .media-row {
            margin-top: 10px;
            white-space: nowrap;
            cursor: pointer;
            .media-icon {
                font-size: 20px;
            }
            .media-text {
                padding-left: 10px;
                color: lighten(black, 40%);
            }
        }
    }
</style>