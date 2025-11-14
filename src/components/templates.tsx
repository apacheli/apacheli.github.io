import type { BluejayContext } from "bluejay";
import { Article, CommonBody, CommonHead, dtf } from "./common.tsx";

const _url = (ctx: BluejayContext) => encodeURIComponent(Bun.env.BLUEJAY_URL + ctx.page.url);

const shareLinks = [
	{
		title: "Post on Facebook",
		href: (ctx: BluejayContext) => `https://www.facebook.com/sharer.php?u=${_url(ctx)}`,
		icon: "/assets/icons/Facebook.svg",
	},
	{
		title: "Tweet on Twitter",
		href: (ctx: BluejayContext) => `https://twitter.com/intent/tweet?url=${_url(ctx)}`,
		icon: "/assets/icons/Twitter.svg",
	},
	{
		title: "Share on LinkedIn",
		href: (ctx: BluejayContext) => `https://www.linkedin.com/sharing/share-offsite?url=${_url(ctx)}`,
		icon: "/assets/icons/LinkedIn.svg",
	},
	{
		title: "Pin on Pinterest",
		href: (ctx: BluejayContext) => `https://pinterest.com/pin/create/button/?url=${_url(ctx)}`,
		icon: "/assets/icons/Pinterest.svg",
	},
];

const PageTemplate = (ctx: BluejayContext) => (
	<html lang="en">
		<CommonHead ctx={ctx} />
		<CommonBody ctx={ctx}>{ctx.page.element(ctx)}</CommonBody>
	</html>
);

const MarkdownTemplate = (ctx: BluejayContext) => (
	<html lang="en">
		<CommonHead ctx={ctx}>
			<link rel="stylesheet" href="/assets/css/markdown.css" />
		</CommonHead>
		<CommonBody ctx={ctx}>
			<main class="markdown">{ctx.page.element(ctx)}</main>
		</CommonBody>
	</html>
);

const BlogTemplate = (ctx: BluejayContext) => {
	const next = ctx.app.data.blogs[ctx.page.data.index - 1];
	const previous = ctx.app.data.blogs[ctx.page.data.index + 1];
	const { title, image, date, tag } = ctx.page.metadata;
	return (
		<html lang="en">
			<CommonHead ctx={ctx}>
				<link rel="stylesheet" href="/assets/css/markdown.css" />
			</CommonHead>
			<CommonBody ctx={ctx}>
				<header class="post-header">
					<h1 class="post-title">{title}</h1>
					<span class="blog-tag">{tag}</span>
					<time class="blog-date" datetime={date}>
						{dtf.format(new Date(date))}
					</time>
					<img class="post-image" src={image ?? "/assets/images/placeholder.avif"} alt={title} />
				</header>
				<main class="markdown">{ctx.page.element(ctx)}</main>
				<footer class="post-footer">
					<h2>Share</h2>
					<span class="share-url">{Bun.env.BLUEJAY_URL + ctx.page.url}</span>
					<div class="icon-links">
						{shareLinks.map((b) => (
							<a href={b.href(ctx)} title={b.title}>
								<img src={b.icon} alt={b.title} class="icon-link" />
							</a>
						))}
					</div>
					<script
						src="https://giscus.app/client.js"
						data-repo="apacheli/apacheli.github.io"
						data-repo-id="R_kgDOLt0Zpg"
						data-category="General"
						data-category-id="DIC_kwDOLt0Zps4CkjKo"
						data-mapping="title"
						data-strict="0"
						data-reactions-enabled="1"
						data-emit-metadata="0"
						data-input-position="top"
						data-theme="preferred_color_scheme"
						data-lang="en"
						crossorigin="anonymous"
						async
					/>
					<h2>Continue Reading</h2>
					{next && <Article {...next} />}
					{previous && <Article {...previous} />}
				</footer>
			</CommonBody>
		</html>
	);
};

export default {
	"blog": BlogTemplate,
	"markdown": MarkdownTemplate,
	"page": PageTemplate,
};
