import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
import store from "./store/store";


createApp(App).use(router).use(store).mixin(ApiMixin).mount("#app");