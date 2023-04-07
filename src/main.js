import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Row from "./components/common/Row.vue";
import Cell from "./components/common/Cell.vue";
import Button from "./components/common/Button.vue";

import './assets/main.css';

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faRedo, faSignsPost, faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faRedo, faSignsPost, faFlagCheckered)


const app = createApp(App);

app
    .use(router)
    .component('j-row', Row)
    .component('j-cell', Cell)
    .component('j-btn', Button)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");
