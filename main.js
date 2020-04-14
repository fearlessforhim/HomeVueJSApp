import MyApp from './App.js'

Vue.config.devtools = true

new Vue({
    el: '#app',
    components: {
	MyApp
    },
    mounted() {
	console.log("mounted");
    },
    template: `
<div class="the-app">
Here's some stuff
<MyApp></MyApp>
</div>
`
})
