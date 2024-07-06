import __JSX__, { render } from "../server/render.js";

import { SocialIcon } from "./Icon.js";

const socials = [{
  name: "discord",
  h: "#5865F2",
}, {
  name: "github",
  h: "#808080",
}, {
  name: "steam",
  h: "#00adef",
}, {
  name: "twitch",
  h: "#8d44f7",
}, {
  name: "twitter",
  h: "#24a3f1",
}, {
  name: "youtube",
  h: "#ff0000",
}]
  .map((social) => (
    <li>
      <SocialIcon
        icon={social.name}
        h={social.h}
        href={`/${social.name}`}
      />
    </li>
  ));

const date = new Date();
const year = date.getFullYear();
const month = `${date.getMonth() + 1}`.padStart(2, "0");
const day = `${date.getDate()}`.padStart(2, "0");

export default render(
  <footer class="main-ftr">
    <nav>
      <ul class="list">
        {socials}
      </ul>
    </nav>
    <span>
      Last deployed at {`<strong>${year}-${month}-${day}</strong> `}
      <a href="https://github.com/apacheli/apacheli.github.io">(Source)</a>
    </span>
    <span>
      Bun <strong>v{process.versions.bun}</strong>
    </span>
    <span>© 2024-present apacheli</span>
  </footer>,
);
