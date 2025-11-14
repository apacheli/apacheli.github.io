import { CodeIcon, EmailIcon, RssIcon } from "./icons.tsx";

const list = [
	{ href: "/feed.xml", icon: RssIcon, title: "RSS Feed", class: "nav-button rss" },
	{ href: "mailto:contact@apache.li", icon: EmailIcon, title: "Contact Me" },
	{ href: "https://github.com/apacheli/apacheli.github.io", icon: CodeIcon, title: "Source" },
];

const date = new Date().toISOString();

export default () => (
	<footer class="main-footer">
		<div class="flex column">
			{list.map((item) => (
				<a class={item.class ?? "nav-button"} href={item.href}>
					<item.icon />
					<span class="hover-tooltip">{item.title}</span>
				</a>
			))}
		</div>
		<span>&copy; 2023-present apacheli. Build Version: {date}</span>
	</footer>
);
