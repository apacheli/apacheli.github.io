import { start } from "bluejay";
import renderToString from "preact-render-to-string";

import Page, { type PageProps } from "@components/Page";

start<PageProps>({
    assets: "assets",
    dir: import.meta.dir,
    dist: "../dist",
    pages: "pages",
    render: (page, pages) => {
        return renderToString(
            <Page {...page.mod}>
                <page.mod.default pages={pages} />
            </Page>,
        );
    },
});
