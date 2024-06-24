import __JSX__ from "../server/render.js";

import Header from "./Header.js";
import Footer from "./Footer.js";

export default ({ title, description }, children) => {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <title>{`${title} - apacheli`}</title>
          <link rel="icon" href="/assets/icon.png" />
          <link rel="stylesheet" href="/assets/index.css" />
          <meta charset="utf-8" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width" />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://apache.li/assets/portrait.png"
          />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://apache.li/" />
        </head>
        <body>
          <Header title={title} />
          <main class="content">
            {children}
          </main>
          {Footer}
        </body>
      </html>
    </>
  );
};
