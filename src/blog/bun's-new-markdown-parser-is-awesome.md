---
title: "Bun's New Markdown API is Awesome"
description: "My favorite recent addition to Bun and greater things are soon to come."
image: "/assets/images/blog/bun's-new-markdown-api-is-awesome.png"
type: "blog"
date: "2026-04-06"
tag: "Development"
---

Bun v1.3.8 added a built-in API for parsing Markdown content. You can access it with `Bun.markdown`.

This API introduces three ways of rendering Markdown:

- `Bun.markdown.html()` - for rendering straight to HTML
- `Bun.markdown.render()` - for custom rendering such as ANSI codes for terminals
- `Bun.markdown.react()` - for transforming Markdown into "React" components

[You can read the official blog on how to use these functions.](https://bun.com/blog/bun-v1.3.8)
For the purposes of this blog, I want to focus on `Bun.markdown.react()` and how you can use it for your site.

## What is Markdown?

**Markdown** is a simple markup language designed to be easily editable and readable in any basic text editor.
It became a popular choice for online forums and blogging due to it's ease of use.

Here's an example written in plain text:

```md
# A Title

Hello, **Bold**!

*This text is italic.*
```

The example above yields the following when rendered in HTML:

> # A Title
>
> Hello, **Bold**!
>
> *This text is italic.*

Here are some nice Markdown tools that I recommend you check out:

- [Markdown Guide](https://www.markdownguide.org/) - Exactly what the name implies
- [StackEdit](https://stackedit.io/) - An editor for Markdown with live preview
- [CommonMark](https://commonmark.org/) - A specification of Markdown because the original was too inconsistent
- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) - A variation of Markdown based on CommonMark

## Templating with JSX

`Bun.markdown.react()` is pretty much designed to be used with JSX.
Keep in mind, it doesn't respect your `tsconfig.json` compiler options; it creates its own React-compatible components.
Unfortunately, Preact fails to render these components because of how their checking system works, so I ended up writing my own renderer.
I could alternatively use `react-dom/server`, but it's 20x slower according to [my benchmarks](https://github.com/apacheli/jsx?tab=readme-ov-file#benchmark).

For this example, I want to make a basic site using Markdown for my blog and JSX for my pages.
Let's start with this directory structure:

```
my-app/
|- src/
|  |- blog/
|  |  |- hello.md
|  |- pages/
|  |  |- index.jsx
|  |- main.jsx
|  |- tsconfig.json
```

Let's also add [my JSX renderer](https://github.com/apacheli/jsx) with the following command:

```sh
$ bun add https://github.com/apacheli/jsx
```

Edit `tsconfig.json` to use it:

```json
{
    "compilerOptions": {
        "jsxImportSource": "@apacheli/jsx"
    }
}
```

Let's start by editing `src/main.jsx` to include this (mildly complex) boilerplate:

```jsx
// src/main.jsx
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { render } from "@apacheli/jsx";

const cwd = process.cwd();

const PAGES_SRC = join(cwd, "./src/pages");
const PAGES_DIST = join(cwd, "./dist");

const replaceExtension = (name, ext) => {
    const i = name.lastIndexOf(".");
    return i > 0 ? name.substring(0, i) + ext : name + ext;
};

for (const page of await readdir(PAGES_SRC)) {
    const mod = await import(join(PAGES_SRC, page));
    const html = render(<mod.default />);
    await Bun.write(
        join(PAGES_DIST, replaceExtension(page, ".html")),
        html,
    );
}
```

A breakdown on what this code accomplishes:

- It reads `src/pages` for `.jsx` files.
- It dynamically imports them with and renders them to HTML with their default export.
- Lastly, it writes them to `dist` as HTML files.

`replaceExtension()` is a helper function that replaces the extension of a file with a different one, or it adds one if it didn't already have none.

The modules must have a default export of a function that returns a JSX component.
It should look like the following:

```jsx
// src/pages/index.jsx
export default () => {
    return (
        <p>Hello, World!</p>
    );
};
```

Now let's add some Markdown rendering. Specifically, I want my blogs to be written in Markdown.

```js
// src/main.jsx
const BLOGS_SRC = join(cwd, "./src/blog");
const BLOGS_DIST = join(cwd, "./dist/blog");

for (const page of await readdir(BLOGS_SRC)) {
    const file = Bun.file(join(BLOGS_SRC, page));
    const component = Bun.markdown.react(await file.text());
    const html = render(component);
    await Bun.write(
        join(BLOGS_DIST, replaceExtension(page, ".html")),
        html,
    );
}
```

A breakdown on what this code accomplishes:

- It reads `src/blog` for `.md` files.
- It reads the files as plain text, parses them with `Bun.markdown.react()`, and renders them to HTML.
- Lastly, it writes them to `dist` as HTML files.

Now you can add some basic Markdown content to `src/blog/hello.md` and it should render to HTML.

```md
# My Blog

Hello!
```

## Adding Syntax Highlighting

You can make your code blocks stand out more by adding extra HTML to certain keywords.
You can use `lowlight` (based on Highlight.js) and `hast-util-to-jsx-runtime` to achieve syntax highlighting for code blocks.

```jsx
import { Fragment, jsx, jsxs } from "@apacheli/jsx";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);

const Code = ({ language, children }) => {
    const tree = lowlight.highlight(language, children.join(""));
    return (
        <pre data-language={language}>
            <code>{toJsxRuntime(tree, { Fragment, jsx, jsxs })}</code>
        </pre>
    );
};

Bun.markdown.react(..., {
    pre: Code,
});
```

For some popular CSS themes, check out [the Highlight.js repository](https://github.com/highlightjs/highlight.js/tree/main/src/styles).

## Adding Front Matter

**Front Matter** (or **Frontmatter**) is a simple way of adding metadata to a Markdown document with YAML.
It was popularized by Jekyll, a static site generator written in Ruby.

There's no formal specification for Front Matter, but most parsers will usually define it as `---` at the top of the document.

```md
---
title: Hello!
---

# My Document
```

We can write a simple parser that extracts and returns this data as a JavaScript object.
We should also take advantage of Bun's built-in YAML parser for even more performance.

```js
const parseFrontmatter = (text) => {
    if (text.startsWith("---")) {
        const end = text.indexOf("\n---", 3);
        if (end > -1) {
            return [
                text.substring(end + 4),
                Bun.YAML.parse(text.substring(3, end)),
            ];
        }
        // Optionally, throw an error here
    }
    return [text, {}];
};
```

> [!TIP]
> Try steering away fron using regular expressions (regex).
> They're pretty slow and difficult to understand even for experienced developers.

If you want to get super fancy, you can make it dynamic and add TOML support:

```js
const parsers = {
    "---": Bun.YAML.parse,
    "+++": Bun.TOML.parse,
};

const parseFrontmatter = (text) => {
    for (const delimiter in parsers) {
        if (text.startsWith(delimiter)) {
            const end = text.indexOf(`\n${delimiter}`, delimiter.length);
            if (end > -1) {
                return [
                    text.substring(end + delimiter.length + 1),
                    parsers[delimiter](text.substring(delimiter.length, end)),
                ];
            }
            // Optionally, throw an error here
        }
    }
    return [text, {}];
};
```

## My Thoughts on Bun's Future

The Markdown API is probably my favorite recent addition to Bun.
As someone who likes building things from scratch for the sake of performance, I tend to avoid dependencies as much as possible.
Furthermore, it gets me out of troubling situations such as [the axios situation](https://github.com/axios/axios/issues/10636) and the node-ipc drama.

With that being said, I hope they expand on this API more to support MDX.
