import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
import LoginMixin from "./logincheck";
import store from "./store/store";


createApp(App).use(router).use(store).mixin(ApiMixin).mixin(LoginMixin).mount("#app");

window.Kakao.init('d8bb26c0f48cd3d3133c47338c290266');
window.Kakao.isInitialized();