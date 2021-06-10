import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Board from "../views/Board.vue";
import Card from "../views/Card.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/board/:id(\\d+)",
    name: "Board",
    component: Board,
    children: [
      {
        path: "list/:listid(\\d+)/card/:cardId(\\d+)",
        name: "Card",
        component: Card,
      },
    ],
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
