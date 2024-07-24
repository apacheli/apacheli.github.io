import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const AngleUp = await import("../icons/angle-up-solid.svg");

export default ({ title, description, children }) => {
    return (
        <>
            <html lang="en">
                <head>
                    <title>{`${title} | apacheli`}</title>
                    <link rel="icon" href="/assets/icon.png" />
                    <link rel="stylesheet" href="/assets/index.css" />
                    <meta charset="utf-8" />
                    <meta name="description" content={description} />
                    <meta name="viewport" content="width=device-width" />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content="https://apache.li/assets/portrait.png" />
                    <meta property="og:title" content={title} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://apache.li/" />
                </head>
                <body>
                    <Header title={title} />
                    <main class="content">{children}</main>
                    <a href="#" class="scroll-to-top">
                        {AngleUp.default}
                    </a>
                    <Footer />
                </body>
            </html>
        </>
    );
};
