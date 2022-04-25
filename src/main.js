import "@babel/polyfill";
import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import App from "@/App.vue";
import router from "@/router/index";
import store from "@/store/index";
import "@/firebase/";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
if (window.Cypress) {
  window.app = app;
}
