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

- `Bun.markdown.html()` &mdash; for rendering straight to HTML
- `Bun.markdown.render()` &mdash; for custom rendering such as ANSI codes for terminals
- `Bun.markdown.react()` &mdash; for transforming Markdown into React components

[You can read the official blog on how to use these functions.](https://bun.com/blog/bun-v1.3.8)
For the purposes of this blog, I want to focus on `Bun.markdown.react()` and how you can build a simple website with it.

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

There's several flavors of Markdown out there mostly due to lack of standardization.
To be fair, it was created by just one guy back in 2004.
One of the most popular flavors is GFM (GitHub Flavored Markdown), which Bun conveniently supports by default.

## Getting Started

> [!IMPORTANT]
> This tutorial assumes you have general coding knowledge.

A few things we need to lay out:

- How we want to structure our codebase.


## Reading Files

## Basic Templating

## Adding highlighting

## Adding Frontmatter (YAML Metadata)

*Frontmatter* is a popular way of adding metadata to Markdown. It's basically just putting some YAML at the top of your document.

## Using GitHub Pages

## What I Would Like to See
