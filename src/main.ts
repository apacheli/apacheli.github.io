import type { BluejayConfiguration } from "bluejay";
import templates from "./components/templates.tsx";
import Feed from "./misc/feed.jsx";

export default {
	root: import.meta.dir,
	dist: "../dist",
	assets: {
		"assets": "/assets",
		"static": "",
	},
	pages: {
		"blog": "/blog",
		"pages": "",
		"system": "",
	},
	components: {},
	serve: {
		port: 4096,
		notFound: "404",
		aliases: {
			"/": "index",
			"/blog/*": "404-blog",
		},
		redirects: {
			"/github": "/redirect",
		},
		headers: {
			"Cache-Control": "no-cache",
		},
	},
	onLoad: (app) => {
		for (let i = 0, j = app.pages.length; i < j; i++) {
			const page = app.pages[i];
			page.data.date = new Date(page.metadata.date);
		}

		app.data.blogs = app.pages.filter((p) => p.metadata.type === "blog").sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.url.localeCompare(b.url));

		for (let i = 0, j = app.data.blogs.length; i < j; i++) {
			app.data.blogs[i].data.index = i;
		}

		return {
			"/sitemap.txt": app.pages
				.sort((a, b) => a.url.localeCompare(b.url))
				.map((p) => Bun.env.BLUEJAY_URL + p.url)
				.join("\n"),
			"/feed.xml": Feed(app),
		};
	},
	render: (ctx) => {
		const type: keyof typeof templates = ctx.page.metadata.type ?? "page";
		return templates[type](ctx);
	},
} satisfies BluejayConfiguration;
