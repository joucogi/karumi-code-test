import Vue from "vue";
import Vuex from "vuex";
import State from "@/store/state";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: new State(),
  mutations,
  getters
});
export default store;
