import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";

createApp(App).use(router).mixin(ApiMixin).mount("#app");