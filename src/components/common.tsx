import type { BluejayPage } from "bluejay";
import Footer from "./footer.tsx";
import Header from "./header.tsx";

const dtf = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "long",
	day: "numeric",
	timeZone: "UTC",
});

const Article = (page: BluejayPage) => {
	const { title, description, image, tag } = page.metadata;
	const date = page.data.date.toISOString();
	return (
		<article>
			<a href={page.url} class="blog-anchor" title={title}>
				<div class="blog-entry">
					<div class="blog-image-container">
						<img src={image ?? "/assets/images/placeholder.avif"} class="blog-image" alt={title} />
						{page.data.index === 0 ? <span class="blog-new">NEW!</span> : undefined}
					</div>
					<div class="blog-metadata">
						<span class="blog-tag">{tag}</span>
						<time class="blog-date" datetime={date}>
							{dtf.format(page.data.date)}
						</time>
						<span class="blog-title">{title}</span>
						<p class="blog-description">{description}</p>
					</div>
				</div>
			</a>
		</article>
	);
};

const CommonHead = ({ ctx, children }: any) => (
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.png" />
		<link rel="stylesheet" href="/assets/css/index.css" />
		<title>{ctx.page.metadata.title ?? "No Title"} - apacheli</title>

		<meta name="description" content={ctx.page.metadata.description} />
		<meta name="theme-color" content="#43b2b2" />

		<meta property="og:description" content={ctx.page.metadata.description} />
		<meta property="og:image" content={`${Bun.env.BLUEJAY_URL}${ctx.page.metadata.image ?? "/assets/images/portrait.png"}`} />
		<meta property="og:title" content={ctx.page.metadata.title} />
		<meta property="og:type" content="website" />
		<meta property="og:url" content={Bun.env.BLUEJAY_URL} />
		<meta name="twitter:card" content="summary_large_image" />

		<link rel="preload" as="font" href="/assets/fonts/cantarell/B50NF7ZDq37KMUvlO015jKJr.woff2" type="font/woff2" crossorigin="anonymous" fetchpriority="high" />
		<link rel="preload" as="image" href="/assets/images/blossom.avif" fetchpriority="high" />

		{children}
	</head>
);

const CommonBody = ({ children }: any) => (
	<body>
		<Header />
		<div class="main-header-banner" />
		<div class="main">{children}</div>
		<Footer />
	</body>
);

export { dtf, Article, CommonBody, CommonHead };
