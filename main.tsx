import { start } from "bluejay";

import Page from "./components/Page.jsx";

await Bun.plugin({
    name: "svg",
    setup: (build) => {
        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            const svg = await Bun.file(args.path).text();
            return {
                contents: `export default()=>${svg}`,
                loader: "js",
            };
        });
    },
});

await start({
    dir: import.meta.dir,
    mode: Bun.env.START_MODE,
    page: (page, pages) => {
        return (
            <Page title={page.module.title} description={page.module.description}>
                <page.module.default pages={pages} />
            </Page>
        );
    },
});
