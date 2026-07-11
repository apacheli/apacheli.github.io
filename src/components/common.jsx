import { Link } from "../components/markdown.jsx";
import icons from "./icons.jsx";

const isDevelopment = Bun.env.NODE_ENV === "development";

const dtf = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const Post = ({ file }) => {
  const date = new Date(file.meta.date);
  return (
    <a href={file.url}>
      <h2>{file.meta.title}</h2>
      <em>{file.meta.description}</em>
      <time datetime={date.toISOString()}>{dtf.format(date)}</time>
    </a>
  );
};

const CommonHead = ({ ctx, children }) => (
  <head>
    <meta charset="utf-8" />
    <title>{ctx.file.meta?.title ?? "No Title"} - apacheli</title>
    <link rel="stylesheet" href="/assets/index.css" />
    <link rel="icon" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="description" content={ctx.file.meta?.description} />
    {children}
  </head>
);

const CommonBody = ({ ctx, children }) => (
  <body>
    <div>
      <header class="common main-header">
        <a class="main-header-title" href="/">
          <icons.whirlybird />
          APACHELI
        </a>
        <input id="main-menu" type="checkbox" />
        <label for="main-menu">
          <icons.bars />
        </label>
        <nav>
          <label for="main-menu" class="off">
            <icons.x />
          </label>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/blog">BLOG</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="banner" />
      {children}
      <footer class="common main-footer">
        <nav>
          <ul>
            <li>
              <a href="mailto:contact@apache.li" data-tooltip="Contact">
                <icons.email />
              </a>
            </li>
            <li>
              <a href="https://github.com/sponsors/apacheli" data-tooltip="Sponsor Me &#10084;&#65039;">
                <icons.donate />
              </a>
            </li>
            <li>
              <a href="/github" data-tooltip="Source">
                <icons.code />
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link href="/github" data-tooltip="@apacheli on GitHub" style="--c:#0fbf3e">
                <icons.github />
              </Link>
            </li>
            <li>
              <Link href="/discord" data-tooltip="@apacheli on Discord" style="--c:#5865f2">
                <icons.discord />
              </Link>
            </li>
            <li>
              <Link href="/steam" data-tooltip="@apacheli on Steam" style="--c:#1a9fff">
                <icons.steam />
              </Link>
            </li>
            <li>
              <Link href="/twitch" data-tooltip="@apachelitv on Twitch" style="--c:#9146ff">
                <icons.twitch />
              </Link>
            </li>
            <li>
              <Link href="/youtube" data-tooltip="@apacheli on YouTube" style="--c:#FF0033">
                <icons.youtube />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
    {isDevelopment ? <script src="/_bluejay/ws/client" /> : undefined}
  </body>
);

export { CommonBody, CommonHead, dtf, isDevelopment, Post };
