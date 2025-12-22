import type { BluejayContext } from "bluejay";
import { Article } from "../components/common.tsx";

export const metadata = {
	id: "index",
	title: "Home",
	description: "I'm apacheli\u2014full-stack web developer and graphic designer.",
};

const projects = [
	{
		title: "SoConns",
		description: "An easy to list your social connections with Bluejay.",
		url: "https://github.com/apacheli/soconns",
		date: "2025",
		language: "TypeScript",
	},
	{
		title: "PlusCraft",
		description: "A simple Fabric mod for adding vanilla-like features to Minecraft.",
		url: "https://github.com/apacheli/pluscraft",
		date: "2025",
		language: "Java",
	},
	{
		title: "Bluejay",
		description: "Minimalist framework for building static pages. Fun fact: my website was built with Bluejay.",
		url: "https://github.com/apacheli/discord-api-libs",
		date: "2024",
		language: "TypeScript",
	},
	{
		title: "apachebot",
		description: "A multipurpose Discord bot with fun and moderation commands.",
		url: "https://github.com/apacheli/apachebot",
		date: "2024",
		language: "Python",
	},
	{
		title: "Unnamed Cube Game",
		description: "A simple game built with L\u00F6ve (Love2D).",
		url: "https://github.com/apacheli/cubegame",
		date: "2024",
		language: "Lua",
	},
	{
		title: "My Standard Library",
		description: "Utility functions for all my JavaScript projects.",
		url: "https://github.com/apacheli/std",
		date: "2023",
		language: "JavaScript",
	},
	{
		title: "No YouTube Shorts",
		description: "Redirects you to the original video player.",
		url: "https://github.com/apacheli/noytshorts",
		date: "2022",
		language: "JavaScript",
	},
	{
		title: "Discord API Libraries",
		description: "A curated list of libraries and frameworks for interacting with Discord's API.",
		url: "https://github.com/apacheli/discord-api-libs",
		date: "2020",
		language: "TypeScript",
	},
	{
		title: "whirlybird",
		description: "Fast and efficient JavaScript library for building Discord bots.",
		url: "https://github.com/apacheli/whirlybird",
		date: "2019",
		language: "TypeScript",
	},
];

const contributions = [
	{
		title: "Wave",
		description: "A Rainmeter-like widget platform powered by Tauri.",
		url: "https://github.com/apacheli/wave",
		date: "2022",
		language: "Rust",
	},
	{
		title: "Discord Developer Documentation",
		description: "I made 20+ commits, 1,000+ changes, and documented the Guild Scheduled Events API.",
		url: "https://github.com/discord/discord-api-docs",
		date: "2020",
		language: "Markdown",
	},
	{
		title: "Eris",
		description: "A popular Node.js library with 1.5k+ stars on GitHub.",
		url: "https://github.com/abalabahaha/eris",
		date: "2019",
		language: "JavaScript",
	},
];

const Project = (project: any) => (
	<a href={project.url} class="blog-anchor" title={project.title}>
		<div class="home-project">
			<span class="blog-title">{project.title}</span>
			<p class="blog-description">{project.description}</p>
			<span class="blog-tag">{project.language}</span>
			<time class="blog-date" datetime={project.date}>
				{project.date}
			</time>
		</div>
	</a>
);

const technology = [
	<img src="/assets/icons/JavaScript.svg" alt="JavaScript" />,
	<img src="/assets/icons/TypeScript.svg" alt="TypeScript" />,
	<img src="/assets/icons/Python.svg" alt="Python" />,
	<img src="/assets/icons/Java.svg" alt="Java" />,
	<img src="/assets/icons/Lua.svg" alt="Lua" />,
	<img src="/assets/icons/React.svg" alt="React" />,
	<img src="/assets/icons/Bun.svg" alt="Bun" />,
	<img src="/assets/icons/VSCode.svg" alt="VSCode" />,
	<img src="/assets/icons/Git.svg" alt="Git" />,
	<img src="/assets/icons/PostgreSQL.svg" alt="PostgreSQL" />,
	<img src="/assets/icons/Redis.svg" alt="Redis" />,
	<img src="/assets/icons/Ubuntu.svg" alt="Ubuntu" />,
	<img src="/assets/icons/Figma.svg" alt="Figma" />,
	<img src="/assets/icons/Docker.svg" alt="Docker" />,
];

export default (context: BluejayContext) => (
	<div class="home">
		<div class="home-panel">
			<img src="/assets/images/portrait.png" alt="Portrait" class="home-portrait" />
			<p>Hello, I'm apacheli.</p>
		</div>
		<main>
			<h1 class="post-title">apacheli</h1>
			<p>Full-Stack Web Developer & Graphic Designer</p>
			<section class="home-section">
				<h2>Technology</h2>
				<div class="home-icons">{technology}</div>
			</section>
			<section class="home-section">
				<h2>Project Highlights</h2>
				<p>A highlight of my best projects.</p>
				<div class="home-projects">{projects.map(Project)}</div>
			</section>
			<section class="home-section">
				<h2>Contributions</h2>
				<p>My contributions to various open-source projects.</p>
				<div class="home-projects">{contributions.map(Project)}</div>
			</section>
			<section class="home-section">
				<h2>Latest Posts</h2>
				<p>See what's new.</p>
				<div>{context.app.data.blogs.slice(0, 2).map(Article)}</div>
			</section>
		</main>
	</div>
);
