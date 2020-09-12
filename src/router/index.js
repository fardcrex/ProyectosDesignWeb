import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tailwind from "../views/Tailwind.vue";
import Grid from "../views/Grid.vue";
import subGrid from "../views/subGrid.vue";
import ExamplePage1 from "../views/ExamplePage1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tailwind",
    name: "Tailwind",
    component: Tailwind
  },
  {
    path: "/Grid",
    name: "Grid",
    component: Grid
  },
  {
    path: "/subGrid",
    name: "subGrid",
    component: subGrid
  },
  {
    path: "/ExamplePage1",
    name: "ExamplePage1",
    component: ExamplePage1
  },
  {
    path: "/notas",
    name: "NoteTaker",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoteTaker.vue")
  },
  {
    path: "/TailwindGrid",
    name: "TailwindGrid",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TailwindGrid.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
