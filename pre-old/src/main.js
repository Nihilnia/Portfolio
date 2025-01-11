import { createApp } from "vue";
import router from "./router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./App.vue";
import "./assets/styles/global.css";
import "./assets/styles/fonts.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faGear,
  faUser,
  faHome,
  faSliders,
  faBell,
  faCode,
  faCodeMerge,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFileCode,
  faGear,
  faUser,
  faHome,
  faSliders,
  faBell,
  faCode,
  faCodeMerge,
  faGlobe,
  faGithub,
  faLinkedin
);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
