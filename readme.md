# Bluejay App Template :rocket:

This project was creating using [the official Bluejay App template](https://github.com/apacheli/bluejay-app) and [`$ bun create`](https://bun.sh/docs/cli/bun-create).

## Getting Started

### `$ bun dle`

Build files for distribution. They will be built to `options.dist`. You can serve them using GitHub Pages or other static hosting services.

### `$ bun serve`

Serve development files locally. Open `http://localhost:1337` in your browser to view your pages.

Use `<BLUEJAY_DEV />` to see your changes in real time. This does nothing if you're just building.

### `$ bun clean`

A utility command for deleting cached Bluejay files and cleaning up dependencies. Run `$ bun install` to get a fresh copy of dependencies.

### `$ bun check`

This template ships with [Biome](https://biomejs.dev/), a fast and modern formatter and linter. Run this command to format your entire project.

> [!TIP]
> You can run `$ bun format` and `$ bun lint` if you don't want a full check on your project.

## Resources

See [the blog](https://apache.li/bluejay/blog) for the latest updates.

Encounter a bug? [Open an issue.](https://github.com/apacheli/bluejay)
