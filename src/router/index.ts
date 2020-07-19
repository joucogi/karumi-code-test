import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import Auth from "@/middlewares/auth";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(Auth(store));

export default router;
