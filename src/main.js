import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { globalMixins } from "./mixins";
import VueClipboard from "vue3-clipboard";

import CopyField from "./components/CopyField";

const app = createApp(App);
app.mixin(globalMixins);
app.use(router);
app.use(VueClipboard, {
	autoSetContainer: false,
	appendToBody: false,
});

app.component("CopyField", CopyField);

app.mount("#app");
