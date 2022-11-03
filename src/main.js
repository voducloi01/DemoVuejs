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

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

import ProductSearch from "./components/ProductSearch";
import Product from "./components/Product";
import Login from "./components/Login.vue";
import Cart from "./components/Cart.vue";

const routes = [
	{ path: "/", component: Product },
	{ path: "/search", component: ProductSearch },
	{ path: "/login", component: Login },
	{ path: "/cart", component: Cart },
];

export const router = new VueRouter({
	routes,
});
import Paginate from "vuejs-paginate";
Vue.use(Paginate);
import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

const httpLink = new HttpLink({
	// URL to graphql server, you should use an absolute URL here
	uri: "http://localhost:3001/graphql",
});

// create the apollo client
const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
});
//import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

// install the vue plugin
Vue.use(VueApollo);

new Vue({
	pinia,
	router,
	apolloProvider,
	render: (h) => h(App),
}).$mount("#app");
