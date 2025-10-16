import { DiscordIcon, GitHubIcon, HouseIcon, MenuCloseIcon, MenuOpenIcon, TwitchIcon, TwitterIcon, YouTubeIcon } from "./icons.tsx";

const nav = [
	{ href: "/", name: "HOME", icon: HouseIcon },
	{ href: "/about", name: "ABOUT" },
	{ href: "/blog", name: "BLOG" },
	{ href: "/contact", name: "CONTACT" },
	{ href: "/github", name: "@apacheli on GitHub", icon: GitHubIcon },
	{ href: "/twitter", name: "@apacheopteryx on Twitter", icon: TwitterIcon },
	{ href: "/youtube", name: "@apacheli on YouTube", icon: YouTubeIcon, class: "nav-button youtube" },
	{ href: "/discord", name: "@apacheli on Discord", icon: DiscordIcon, class: "nav-button discord" },
	{ href: "/twitch", name: "@apachelitv on Twitch", icon: TwitchIcon, class: "nav-button twitch" },
];

export default () => (
	<>
		<header class="main-header">
			<a href="/" class="main-header-title">
				<img src="/assets/images/icon.png" height="48" width="48" alt="apacheli Icon" />
				<span>APACHELI</span>
			</a>
			<input type="checkbox" id="nav-checkbox" />
			<label for="nav-checkbox" class="nav-check open">
				<MenuOpenIcon />
			</label>
			<label for="nav-checkbox" class="nav-check close">
				<MenuCloseIcon />
			</label>
			<nav class="main-header-nav">
				<ul class="flex-list">
					{nav.map((item) => (
						<li>
							<a href={item.href} class={item.class ?? "nav-button"}>
								{item.icon && <item.icon />}
								{item.icon ? <span class="hover-tooltip">{item.name}</span> : item.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
		<div class="main-header-banner" />
	</>
);
