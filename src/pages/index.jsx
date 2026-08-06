import { dtf, Post } from "../components/common";
import { Link } from "../components/markdown";

export const meta = {
  title: "Home",
  description: "Hi, I'm apacheli.",
};

const projects = [
  {
    title: "discord-api-libs",
    description: "List of open-source Discord API Libraries",
    url: "https://github.com/apacheli/discord-api-libs",
    language: "JavaScript",
  },
  {
    title: "whirlybird",
    description: "JavaScript library for building Discord bots.",
    url: "https://github.com/apacheli/whirlybird",
    language: "JavaScript",
  },
  {
    title: "bluejay",
    description: "Building static pages made easy.",
    url: "https://github.com/apacheli/bluejay",
    language: "JavaScript",
  },
];

const icons = [
  { src: "/assets/icons/javascript.svg", alt: "JavaScript" },
  { src: "/assets/icons/typescript.svg", alt: "TypeScript" },
  { src: "/assets/icons/python.svg", alt: "Python" },
  { src: "/assets/icons/java.svg", alt: "Java" },
  { src: "/assets/icons/lua.svg", alt: "Lua" },
  { src: "/assets/icons/nodejs.svg", alt: "Node.js" },
  { src: "/assets/icons/git.svg", alt: "Git" },
  { src: "/assets/icons/docker.svg", alt: "Docker" },
  { src: "/assets/icons/redis.svg", alt: "Redis" },
  { src: "/assets/icons/postgresql.svg", alt: "PostgreSQL" },
  { src: "/assets/icons/figma.svg", alt: "Figma" },
  { src: "/assets/icons/ubuntu.svg", alt: "Ubuntu" },
];

const Project = (project) => {
  return (
    <Link href={project.url}>
      <h2>{project.title}</h2>
      <em>{project.description}</em>
      <p>
        <span class="card-tag">{project.language}</span>
      </p>
    </Link>
  );
};

export default (ctx) => {
  return (
    <>
      <div class="home-header">
        <img class="banner" src="/assets/banner.webp" />
        <img class="portrait" src="/assets/portrait.png" />
        <h1>Hi, I'm apacheli.</h1>
        <p>Full-Stack Web Developer & Graphic Designer</p>
      </div>
      <section>
        <h2>Tech Experience</h2>
        <div class="icon-cards">
          {icons.map((img) => <img {...img} />)}
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div class="card-list" style="--grid:2">
          {projects.map(Project)}
        </div>
      </section>
    </>
  );
};
