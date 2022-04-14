import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from '@/store/index';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-view",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about-view",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      meta: {
        authRequired: true
    }
  },
    {
      path: '/menu',
      name: 'menu-view',
      component: () =>
      import(/* webpackChunkName: "menu" */ "../views/MenuView.vue"),
  },
  {
      path: '/sign-in',
      name: 'signin-view',
      component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SigninView.vue"),
  },
  {
      path: '/join',
      name: 'join-view',
      component: () =>
      import(/* webpackChunkName: "join" */ "../views/JoinView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (!store.state.isAuthenticated) {
          next({
              path: '/sign-in'
          });
      } else {
          next();
      }
  } else {
      next();
  }
});

export default router;
