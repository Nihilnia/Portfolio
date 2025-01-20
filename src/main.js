import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

import "@/styles/global.css";

const Gloria = createApp(App);

Gloria.use(router);
Gloria.mount("#app");
