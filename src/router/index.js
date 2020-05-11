import Vue from "vue";
import VueRouter from "vue-router";
import Game from "@/components/Game";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "game",
    component: Game
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
