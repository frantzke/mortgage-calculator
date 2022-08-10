import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(store).use(vuetify).use(Donut).mount("#app");
