import Vue from "vue";
import VueMask from "v-mask";
import Vuelidate from "vuelidate";
import clampy from "@clampy-js/vue-clampy";
import VTooltip from "v-tooltip";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/_style.scss";
import store from "./store/store";
Vue.use(Vuelidate);
Vue.use(VueMask);
Vue.use(clampy);
Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
