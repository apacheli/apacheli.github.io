import { build, serve } from "jsx";

import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/404.jsx";

const task = Deno.args[0] === "build" ? build : serve;

await task("src", "dist", [
  ".github",
  "assets",
  "blog",
], {
  ".github/404.md": "---\npermalink: 404.html\n---",
  "404.html": NotFound,
  "about.html": About,
  "blog.html": Blog,
  "contact.html": Contact,
  "index.html": Home,
}, [
  "assets/icon.png",
  "assets/icon-dark.png",
  "assets/NotoSansJP-Regular.ttf",
  "assets/portrait.png",
  "index.css",
]);
