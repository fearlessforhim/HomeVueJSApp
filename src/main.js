import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'

import Row from "@/components/common/Row";
import Cell from "@/components/common/Cell";
import Button from "@/components/common/Button";
import router from './router'

Vue.config.productionTip = false;

Vue.component('j-row', Row);
Vue.component('j-cell', Cell);
Vue.component('j-btn', Button);

Vue.use(VueMoment);
Vue.use(VueAxios, axios);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
