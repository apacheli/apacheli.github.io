import { dtf, Post } from "../components/common.jsx";
import icons from "../components/icons.jsx";
import { Link } from "../components/markdown.jsx";

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

const techCards = [
  <img src="/assets/icons/javascript.svg" alt="JavaScript" />,
  <img src="/assets/icons/typescript.svg" alt="TypeScript" />,
  <img src="/assets/icons/python.svg" alt="Python" />,
  <img src="/assets/icons/java.svg" alt="Java" />,
  <img src="/assets/icons/lua.svg" alt="Lua" />,
  <img src="/assets/icons/nodejs.svg" alt="Node.js" />,
  <img src="/assets/icons/react.svg" alt="React" />,
  <img src="/assets/icons/git.svg" alt="Git" />,
  <img src="/assets/icons/docker.svg" alt="Docker" />,
  <img src="/assets/icons/redis.svg" alt="Redis" />,
  <img src="/assets/icons/postgresql.svg" alt="PostgreSQL" />,
  <img src="/assets/icons/figma.svg" alt="Figma" />,
  <img src="/assets/icons/ubuntu.svg" alt="Ubuntu" />,
  <img src="/assets/icons/visual-studio-code.svg" alt="Visual Studio Code" />,
];

const Project = (project) => {
  return (
    <Link href={project.url}>
      <h2>
        <icons.folder /> {project.title}
      </h2>
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
        <em>Full-Stack Web Developer & Graphic Designer</em>
      </div>
      <section>
        <h2>Tech Experience</h2>
        <div class="icon-cards">
          {techCards}
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
