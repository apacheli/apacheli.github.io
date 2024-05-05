import { build, serve } from "./build.js";

import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/404.jsx";

await (Bun.argv.includes("--serve") ? serve : build)({
  dirs: [
    ".github",
    "assets",
    "blog",
  ],
  files: {
    ".github/404.md": "---\npermalink: 404.html\n---",
    "404.html": NotFound,
    "about.html": About,
    "blog.html": Blog,
    "contact.html": Contact,
    "index.html": Home,
  },
  copies: [
    "assets/icon.png",
    "assets/font.woff2",
    "assets/portrait.png",
    "index.css",
  ],
  src: "src",
  dist: "dist",
});
