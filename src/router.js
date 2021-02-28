import { createRouter, createWebHistory } from "vue-router";
import { setTitle } from "@/mixins";

import Top from "./pages/Top";
import Join from "./pages/Join";
import Rules from "./pages/Rules";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const routerHistory = createWebHistory();
export const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: "/TheLowHP/",
			name: "index",
			component: Top,
			meta: {},
		},
		{
			path: "/TheLowHP/join",
			name: "join",
			component: Join,
			meta: { title: "Join" },
		},
		{
			path: "/TheLowHP/rules",
			name: "rules",
			component: Rules,
			meta: { title: "Rules" },
		},
		{
			path: "/TheLowHP/faq",
			name: "faq",
			component: FAQ,
			meta: { title: "FAQ" },
		},
		{
			path: "/TheLowHP/:catchAll(.*)",
			component: NotFound,
			meta: { title: "404" },
		},
	],
});

router.beforeEach((to, _, next) => {
	setTitle(to.meta.title);
	next();
});
