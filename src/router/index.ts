import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import Auth from "@/middlewares/auth";
import store from "@/store";
import FakeLoginApi from "@/adapters/fake-login-api";
import Server from "../../backend/server";
import LocalStorage from "@/adapters/local-storage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(
  Auth(store, new LocalStorage(), new FakeLoginApi(new Server()))
);

export default router;
