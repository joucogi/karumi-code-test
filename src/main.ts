import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import LoginUser from "@/services/login-user";
import Validator from "@/services/validator";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  provide: {
    login: new LoginUser(store),
    validator: new Validator()
  },
  render: h => h(App)
}).$mount("#app");
