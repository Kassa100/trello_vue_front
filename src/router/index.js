import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Board from "../views/Board.vue";
import Card from "../views/Card.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import store from "@/store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/board/:id(\\d+)",
    name: "Board",
    component: Board,
    meta: {
      requiresAuth: true,
    },
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
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});
store.commit("user/initUserInfo");
router.beforeEach((to, from, next) => {
  //如果该路由需要鉴权 则验证用户信息  如果不通过跳转登录页面

  if (
    to.matched.some((matched) => matched.meta.requiresAuth) &&
    !store.state.user.info
  ) {
    next({
      name: "Login",
    });
  } else {
    next();
  }
});

export default router;
