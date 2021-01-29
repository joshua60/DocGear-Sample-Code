import Vue from "vue";
import VueRouter from "vue-router";
import app from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    // path: "/:fake1/:fake2/:fake3/:id",
    // path: "/:id",
    path: "/",
    name: "index",
    component: app
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
