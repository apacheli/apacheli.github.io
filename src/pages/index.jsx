import icons from "../components/icons.jsx";
import { ExternalLink } from "../components/markdown.jsx";

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
    title: "bluejay",
    description: "Building static pages made easy.",
    url: "https://github.com/apacheli/bluejay",
    language: "JavaScript",
  },
  {
    title: "whirlybird",
    description: "JavaScript library for building Discord bots.",
    url: "https://github.com/apacheli/whirlybird",
    language: "JavaScript",
  },
  {
    title: "SoConns",
    description: "Share your social connections with bluejay.",
    url: "https://github.com/apacheli/soconns",
    language: "TypeScript",
  },
  {
    title: "apachebot",
    description: "Personal Discord Bot",
    url: "https://github.com/apacheli/apachebot",
    language: "Python",
  },
];

const tech = [
  { src: "/assets/icons/javascript.svg", alt: "JavaScript" },
  { src: "/assets/icons/typescript.svg", alt: "TypeScript" },
  { src: "/assets/icons/python.svg", alt: "Python" },
  { src: "/assets/icons/java.svg", alt: "Java" },
  { src: "/assets/icons/lua.svg", alt: "Lua" },
  { src: "/assets/icons/nodejs.svg", alt: "Node.js" },
  { src: "/assets/icons/react.svg", alt: "React" },
  { src: "/assets/icons/git.svg", alt: "Git" },
  { src: "/assets/icons/docker.svg", alt: "Docker" },
  { src: "/assets/icons/redis.svg", alt: "Redis" },
  { src: "/assets/icons/postgresql.svg", alt: "PostgreSQL" },
  { src: "/assets/icons/figma.svg", alt: "Figma" },
  { src: "/assets/icons/ubuntu.svg", alt: "Ubuntu" },
  { src: "/assets/icons/visual-studio-code.svg", alt: "Visual Studio Code" },
];

const Project = (project) => {
  return (
    <ExternalLink href={project.url}>
      <h2>
        <icons.folder /> {project.title}
      </h2>
      <em>{project.description}</em>
      <p>
        <span class="card-tag">{project.language}</span>
      </p>
    </ExternalLink>
  );
};

export default () => {
  return (
    <>
      <div class="home-header">
        <img class="banner" src="/assets/banner.webp" />
        <img class="portrait" src="/assets/portrait.png" />
        <h1>Hi, I'm apacheli.</h1>
        <em>Full-Stack Web Developer & Graphic Designer</em>
      </div>
      <section>
        <h2>Tech Experience</h2>
        <div class="icon-cards">
          {tech.map((t) => <img {...t} />)}
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
