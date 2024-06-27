import __JSX__, { render } from "../server/render.js";

import { SocialIcon } from "./Icon.js";

const socials = [
  {
    icon: "discord",
    href: "https://discord.com/users/460612586061430806",
    h: "#5865F2",
  },
  {
    icon: "github",
    href: "https://github.com/apacheli",
    h: "#808080",
  },
  {
    icon: "steam",
    href: "https://steamcommunity.com/id/apacheli/",
    h: "#00adef",
  },
  {
    icon: "twitch",
    href: "https://www.twitch.tv/apachelitv",
    h: "#8d44f7",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/apacheopteryx",
    h: "#24a3f1",
  },
  {
    icon: "youtube",
    href: "https://www.youtube.com/@apacheli",
    h: "#ff0000",
  },
]
  .map((social) => (
    <li>
      <SocialIcon
        icon={social.icon}
        h={social.h}
        href={social.href}
      />
    </li>
  ));

const date = new Date();
const d = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export default render(
  <footer class="main-ftr">
    <nav>
      <ul class="list">
        {socials}
      </ul>
    </nav>
    <span>
      Last updated on {`<strong>${d}</strong> `}
      <a href="https://github.com/apacheli/apacheli.github.io">(Source)</a>
    </span>
    <span>
      Bun <strong>v{process.versions.bun}</strong>
    </span>
    <span>© 2024-present apacheli</span>
  </footer>,
);
