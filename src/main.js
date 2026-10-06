import { join } from "node:path";
import { render } from "@apacheli/jsx";

import extension from "bluejay/lib/plugins/extension.js";
import jsx from "bluejay/lib/plugins/jsx.js";
import lightningCss from "bluejay/lib/plugins/lightning_css.js";
import markdown from "bluejay/lib/plugins/markdown.js";

import { renderMarkdown } from "./components/markdown.jsx";
import BlogLayout from "./layouts/blog.jsx";
import PageLayout from "./layouts/page.jsx";
import MarkdownLayout from "./layouts/markdown.jsx";

const layouts = {
  "blog": BlogLayout,
  "markdown": MarkdownLayout,
  "page": PageLayout,
};

const dist = join(Bun.cwd, "./dist");
const dev = Bun.env.NODE_ENV === "development";
const mode = Bun.env.BLUEJAY_MODE;
const port = dev ? 1337 : 80;

export default {
  dev,
  dist,
  meta: import.meta,
  mode,
  port,
  index: "/index",
  notFound: "/404",
  map: {
    "/": [
      "./pages",
      "./static",
      "./system",
    ],
    "/assets": [
      "./assets",
    ],
    "/blog": [
      "./blog",
    ],
  },
  plugins: [
    lightningCss({
      minify: true,
    }),
    jsx(),
    markdown(Bun.YAML.parse, renderMarkdown),
    extension({
      ".html": /\.(?:md|jsx|tsx)$/,
    }),
    (app) => {
      app.files.sort((a, b) => a.url.localeCompare(b.url));

      app.posts = app.files.filter((f) => f.meta?.type === "blog");
      app.posts.forEach((f) => {
        f.meta.date = new Date(f.meta.date);
      });
      app.posts.sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime());
      app.posts.forEach((f, i) => {
        f.meta.index = i;
      });

      const destination = mode === "build" ? dist : `http://localhost:${port}`;
      for (const file of app.files) {
        console.log(`    \x1b[32m\u2192\x1b[39m \x1b[90m${destination}\x1b[36m${file.url}\x1b[39m`);
        if (file.render !== undefined) {
          const Layout = layouts[file.meta?.type] ?? PageLayout;
          file.content = "<!DOCTYPE html>" + render(<Layout ctx={{ app, file }} />);
        }
      }
    },
  ],
};
