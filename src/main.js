import Vue from "vue";
import Resource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App";
import router from "./router";
import store from "./store";
// Importing the global css file
import "@/assets/global.scss";

Vue.config.productionTip = false;
Vue.use(Resource);
Vue.use(VueRouter);
Vue.config.debug = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
