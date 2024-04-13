export const jsx = (t, a, ...c) => ({ type: t, attributes: a, children: c });

export default jsx;

export function render(x) {
  if (typeof x === "function") {
    return render(x());
  }
  if (typeof x !== "object") {
    return `${x}`;
  }
  if (Array.isArray(x)) {
    return x.reduce((a, b) => a + render(b), "");
  }
  if (typeof x.type === "function") {
    return render(x.type(x.attributes ?? {}, x.children));
  }
  const c = x.children.reduce((a, b) => a + render(b), "");
  if (!x.type) {
    return c;
  }
  let a = "";
  for (const attribute in x.attributes) {
    a += ` ${attribute}="${x.attributes[attribute]}"`;
  }
  return `<${x.type}${a}>${c && `${c}</${x.type}>`}`;
}

export async function build(src, dist, directories, files, copies) {
  await Deno.mkdir(dist, { recursive: true });
  await Promise.all(
    directories.map((dir) => Deno.mkdir(`${dist}/${dir}`, { recursive: true })),
  );
  const promises = [];
  for (const file in files) {
    promises.push(Deno.writeTextFile(`${dist}/${file}`, render(files[file])));
  }
  for (const copy of copies) {
    promises.push(Deno.copyFile(`${src}/${copy}`, `${dist}/${copy}`));
  }
  await Promise.all(promises);
}

const MIME_TYPES = {
  ".7z": "application/x-7z-compressed",
  ".apng": "image/apng",
  ".css": "text/css",
  ".csv": "text/csv",
  ".gif": "image/gif",
  ".gz": "application/gzip",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".md": "text/plain",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".rar": "application/vnd.rar",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".wav": "audio/wav",
  ".webp": "image/webp",
  ".xml": "application/xml",
  ".zip": "application/zip",
};

export function getType(file) {
  const index = file.lastIndexOf(".");
  return index > -1
    ? MIME_TYPES[file.substring(index)] ?? "application/octet-stream"
    : "text/plain";
}

export function respond(route, status) {
  return new Response(route.data, {
    headers: {
      "Content-Type": route.type,
    },
    status,
  });
}

export function handler(request, routes) {
  const { pathname } = new URL(request.url);
  const route = pathname === "/"
    ? routes.get("/index.html")
    : routes.get(pathname) ?? routes.get(`${pathname}.html`);
  if (route) {
    return respond(route, 200);
  }
  const nf = routes.get("/404.html");
  return nf ? respond(nf, 404) : new Response("Not Found", { status: 404 });
}

export async function serve(src, _dist, _directories, files, copies) {
  const routes = new Map();
  for (const file in files) {
    routes.set(`/${file}`, { data: render(files[file]), type: getType(file) });
  }
  await Promise.all(
    copies.map((file) =>
      Deno.readFile(`${src}/${file}`).then((data) =>
        routes.set(`/${file}`, { data, type: getType(file) })
      )
    ),
  );
  console.log(`\n${[...routes.keys()].join("\n")}\n`);
  return Deno.serve((request) => handler(request, routes));
}
