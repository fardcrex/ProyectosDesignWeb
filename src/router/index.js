import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tailwind from "../views/Tailwind.vue";
import Grid from "../views/Grid.vue";
import subGrid from "../views/subGrid.vue";
import ExamplePage1 from "../views/ExamplePage1.vue";
import ExamplePage2 from "../views/ExamplePage2.vue";
import NamePage from "../components/page_example_2//NamePage.vue";

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
    path: "/ExamplePage2",
    component: ExamplePage2,
    children: [
      {
        path: "/",
        name: "ExamplePage2",
        component: NamePage,
        props: { NamePageTitle: "home" }
      },
      {
        path: "destinatario",
        component: NamePage,
        props: { NamePageTitle: "destinatario" }
      },
      {
        path: "precio",
        component: NamePage,
        props: { NamePageTitle: "precio" }
      },
      {
        path: "booking",
        component: NamePage,
        props: { NamePageTitle: "booking" }
      },
      {
        path: "nosotros",
        component: NamePage,
        props: { NamePageTitle: "nosotros" }
      }
    ]
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
