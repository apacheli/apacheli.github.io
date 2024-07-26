import { start } from "bluejay";

import Page from "./components/Page.jsx";

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
