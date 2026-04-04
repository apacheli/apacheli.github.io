---
title: "Building a Markdown Blog with Bun"
description: "aaaa"
image: null
type: "blog"
date: "2026-02-03"
tag: "Development"
---

Bun v1.3.8 added a built-in API for parsing Markdown content. You can access it with `Bun.markdown`.

This API introduces three ways of rendering Markdown:

- `Bun.markdown.html()` - for rendering straight to HTML
- `Bun.markdown.render()` - for custom rendering such as ANSI codes for terminals
- `Bun.markdown.react()` - for transforming Markdown into React components

[You can read the official blog on how to use these functions.](https://bun.com/blog/bun-v1.3.8)
For the purposes of this blog, I want to focus on `Bun.markdown.react()` and how you can build a simple blog with it.

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

Here are some nice Markdown tools I recommend you check out:

- [Markdown Guide](https://www.markdownguide.org/) - Exactly what the name implies
- [StackEdit](https://stackedit.io/) - An editor for Markdown with live preview
- [CommonMark](https://commonmark.org/) - A specification of Markdown because the original was inconsistent
- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) - A variation of Markdown based on CommonMark

## Getting Started

> [!IMPORTANT]
> This tutorial assumes you have general programming knowledge.

### Templating with JSX

### Using GitHub Pages

## Adding Highlighting

## Adding Front Matter

**Front Matter** (sometimes **Frontmatter**) is a simple way of adding metadata to a Markdown document.
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
