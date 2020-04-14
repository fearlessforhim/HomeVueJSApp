import PageWrap from './App.js'

Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        PageWrap
    },
    mounted() {
        console.log("mounted");
    },
    template: `
        <div class="the-app">
            Here's some stuff
            <PageWrap></PageWrap>
        </div>
`
});
