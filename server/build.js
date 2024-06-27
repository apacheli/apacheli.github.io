import mdx from "@mdx-js/esbuild";
import { plugin } from "bun";
import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import remarkGfm from "remark-gfm";

import Page from "../components/Page.js";
import __JSX__, { render } from "./render.js";

plugin(
  mdx({
    baseUrl: import.meta.url,
    jsxRuntime: "classic",
    pragma: "__JSX__",
    pragmaFrag: "null",
    pragmaImportSource: "./render.js",
    remarkPlugins: [
      remarkGfm,
    ],
  }),
);

export const types = {
  ".apng": "image/apng",
  ".css": "text/css",
  ".gif": "image/gif",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".xml": "application/xml",
};

const _fs = { recursive: true };

const _buildHtml = async (file) => {
  const src = await import(`../pages/${file}`);
  const page = render(
    <Page title={src.title} description={src.description}>
      <src.default />
    </Page>,
  );
  await writeFile(`dist/${file.slice(0, -4)}.html`, page);
};

const build = async ({ directories }) => {
  await Promise.all(directories.map((dir) => mkdir(`dist/${dir}`, _fs)));
  await cp("assets", "dist/assets", _fs);
  const promises = [];
  for (const file of await readdir("pages", _fs)) {
    if (file.slice(-4) !== ".mdx") {
      continue;
    }
    promises.push(_buildHtml(file));
  }
  await Promise.all(promises);

  console.log("Done.");
};

const normalize = (file) => file.replace(/\\/g, "/");

export const getType = (file) => {
  const index = file.lastIndexOf(".");
  if (index === 1) {
    return "text/plain";
  }
  return types[file.substring(index)] ?? "text/plain";
};

const _serveAsset = async (file, paths) => {
  paths[`/assets/${normalize(file)}`] = {
    data: await readFile(`assets/${file}`),
    type: getType(file),
  };
};

const _serveHtml = async (file, paths) => {
  const src = await import(`../pages/${file}`);
  const page = render(
    <Page title={src.title} description={src.description}>
      <src.default />
    </Page>,
  );
  paths[`/${normalize(file.slice(0, -4))}.html`] = {
    data: page,
    type: "text/html",
  };
};

async function serve() {
  const paths = {};

  const _files = [];
  for (const file of await readdir("assets", _fs)) {
    _files.push(_serveAsset(file, paths));
  }
  for (const file of await readdir("pages", _fs)) {
    if (file.slice(-4) !== ".mdx") {
      continue;
    }
    _files.push(_serveHtml(file, paths));
  }
  await Promise.all(_files);

  for (const k in paths) {
    console.log(`    ${k}`);
  }
  console.log("\n=> http://localhost:1337/\n");

  return Bun.serve({
    fetch: (request) => handleRequest(request, paths),
    port: 1337,
  });
}

const _notFound = new Response("Not Found", { status: 404 });

const handleRequest = (request, p) => {
  const { pathname } = new URL(request.url);
  let r = pathname === "/"
    ? p["/index.html"]
    : p[pathname] ?? p[`${pathname}.html`];
  if (r !== undefined) {
    console.log(`    \x1b[36m200 ${pathname}\x1b[39m`);
    return new Response(r.data, { headers: { "Content-Type": r.type } });
  }
  r = p["/404.html"];
  console.log(`    \x1b[31m404 ${pathname}\x1b[39m`);
  return r !== undefined
    ? new Response(r.data, { status: 404, headers: { "Content-Type": r.type } })
    : _notFound;
};

switch (Bun.argv[2]) {
  case "--build": {
    await build({
      directories: [
        "blog",
      ],
    });
    break;
  }

  case "--serve": {
    await serve();
    break;
  }

  default: {
    console.log("Use --build or --serve");
    break;
  }
}
