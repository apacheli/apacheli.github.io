import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

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
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
};

export const getType = (file) => {
  const index = file.lastIndexOf(".");
  return index > -1 && types[file.substring(index)] || "text/plain";
};

export default (t, a, ...c) => ({ type: t, attributes: a, children: c });

export const render = (element) => {
  if (typeof element === "function") {
    return render(element());
  }
  if (typeof element !== "object") {
    return `${element}`;
  }
  if (Array.isArray(element)) {
    return element.reduce((a, b) => a + render(b), "");
  }
  if (typeof element.type === "function") {
    return render(element.type(element.attributes, element.children));
  }
  const c = element.children.reduce((a, b) => a + render(b), "");
  if (element.type === null) {
    return c;
  }
  let a = "";
  for (const attribute in element.attributes) {
    a += ` ${attribute}="${element.attributes[attribute]}"`;
  }
  return `<${element.type}${a}>${c && `${c}</${element.type}>`}`;
};

export const build = async ({ copies, dirs, dist, files, src }) => {
  const o = { recursive: true };
  await Promise.all(dirs.map((d) => mkdir(`${dist}/${d}`, o)));
  const p = [];
  for (const file in files) {
    p.push(writeFile(`${dist}/${file}`, render(files[file])));
  }
  for (const copy of copies) {
    p.push(copyFile(`${src}/${copy}`, `${dist}/${copy}`));
  }
  await Promise.all(p);
};

export const serve = async ({ copies, files, src }) => {
  const p = {};
  for (const f in files) {
    p[`/${f}`] = { b: render(files[f]), t: getType(f) };
  }
  await Promise.all(
    copies.map(async (c) =>
      p[`/${c}`] = { b: await readFile(`${src}/${c}`), t: getType(c) }
    ),
  );
  console.log(`${Object.keys(p).join("\n")}\n\nhttp://localhost:3000/`);
  return Bun.serve({
    fetch: (request) => {
      const { pathname } = new URL(request.url);
      let r = pathname === "/"
        ? p["/index.html"]
        : p[pathname] ?? p[`${pathname}.html`];
      if (r) {
        return new Response(r.b, { headers: { "Content-Type": r.t } });
      }
      r = p["/404.html"];
      return r
        ? new Response(r.b, { status: 404, headers: { "Content-Type": r.t } })
        : new Response("Not Found", { status: 404 });
    },
  });
};
