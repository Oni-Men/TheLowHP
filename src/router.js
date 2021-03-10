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
			path: "/thelow/",
			name: "index",
			component: Top,
			meta: {},
		},
		{
			path: "/thelow/?p=join",
			name: "join",
			component: Join,
			meta: { title: "Join" },
		},
		{
			path: "/thelow/?p=rules",
			name: "rules",
			component: Rules,
			meta: { title: "Rules" },
		},
		{
			path: "/thelow/?p=faq",
			name: "faq",
			component: FAQ,
			meta: { title: "FAQ" },
		},
		{
			path: "/thelow/:catchAll(.*)",
			component: NotFound,
			meta: { title: "404" },
		},
	],
});

router.beforeEach((to, _, next) => {
	setTitle(to.meta.title);
	next();
});
