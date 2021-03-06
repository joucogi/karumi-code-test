import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import FakeLoginApi from "@/adapters/fake-login-api";
import Server from "../backend/server";

import LocalStorage from "@/adapters/local-storage";

import LoginUser from "@/services/login-user";
import Validator from "@/services/validator";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

const storage = new LocalStorage();

new Vue({
  router,
  store,
  provide: {
    login: new LoginUser(store, new FakeLoginApi(new Server()), storage),
    validator: new Validator()
  },
  render: h => h(App)
}).$mount("#app");
