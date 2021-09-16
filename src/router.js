import { createRouter, createWebHistory } from "vue-router";
import { setTitle } from "@/mixins";

import Top from "./pages/Top";
import Article from "./pages/Article";
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
			path: "/thelow/?a=:id",
			name: "article",
			component: Article,
			meta: { title: "Article" },
		},
		{
			path: "/thelow/:catchAll(.*)",
			name: "404",
			component: NotFound,
			meta: { title: "404" },
		},
	],
});

router.beforeEach((to, _, next) => {
	setTitle(to.meta.title);
	next();
});
