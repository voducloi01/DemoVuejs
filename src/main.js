//pinia
import { createPinia, PiniaVuePlugin } from "pinia";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
//
//axios
import axios from "axios";

Vue.prototype.$http = axios;

import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

import ProductSearch from "./components/ProductSearch";
import Product from "./components/Product";
import Login from "./components/Login.vue";

const routes = [
	{ path: "/", component: Product },
	{ path: "/search", component: ProductSearch },
	{ path: "/login", component: Login },
];

const router = new VueRouter({
	routes,
});
new Vue({
	render: (h) => h(App),
	pinia,
	router,
}).$mount("#app");
