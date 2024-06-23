import __JSX__ from "../server/render.js";

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
    href: "https://www.youtube.com/@apacheopteryx",
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

export default () => {
  return (
    <footer class="main-ftr">
      <nav>
        <ul class="list">
          {socials}
        </ul>
      </nav>
      <span>© 2024-present apacheli</span>
    </footer>
  );
};
