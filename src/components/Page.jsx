import jsx from "jsx";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Page({ title, description }, children) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <title>{`${title} - apacheli`}</title>
          <link rel="icon" href="/assets/icon.png" />
          <link rel="stylesheet" href="/index.css" />
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
          <div class="content">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
