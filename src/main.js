import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { globalMixins } from "./mixins";
import VueClipboard from "vue3-clipboard";

const app = createApp(App);
app.mixin(globalMixins);
app.use(router);
app.use(VueClipboard, {
	autoSetContainer: false,
	appendToBody: false,
});

app.mount("#app");
