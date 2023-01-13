import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Row from "./components/common/Row.vue";
import Cell from "./components/common/Cell.vue";
import Button from "./components/common/Button.vue";

import './assets/main.css';


const app = createApp(App);

app.use(router);
app.component('j-row', Row);
app.component('j-cell', Cell);
app.component('j-btn', Button);
app.mount("#app");
