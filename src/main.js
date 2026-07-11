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

export default {
  meta: import.meta,
  dist: join(Bun.cwd, "./dist"),
  port: 1337,
  dev: Bun.env.NODE_ENV === "development",
  map: {
    "/": ["./static", "./pages"],
    "/assets": ["./assets"],
    "/blog": ["./blog"],
  },
  notFound: "/404",
  plugins: [
    lightningCss({ minify: true }),
    jsx,
    markdown(Bun.YAML.parse, renderMarkdown),
    extension({
      ".html": /\.(?:md|jsx)$/,
    }),
    (data) => {
      data.posts = data.files
        .filter((a) => a.meta?.type === "blog")
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
      for (let i = 0, j = data.posts.length; i < j; i++) {
        data.posts[i].meta.index = i;
      }
    },
    (data) => {
      const url = data.options.dev ? `http://localhost:${data.options.port}` : data.options.dist;
      for (const file of data.files) {
        console.log(`    \x1b[32m\u2192\x1b[39m \x1b[90m${url}\x1b[36m${file.url}\x1b[39m`);
        if (file.render !== undefined) {
          const layout = layouts[file.meta?.type] ?? PageLayout;
          file.content = "<!DOCTYPE html>" + render(layout({ data, file }));
        }
      }
    },
  ],
};
