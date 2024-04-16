import jsx from "jsx";

import { SocialIcon } from "./Icon.jsx";

const socials = [
  {
    icon: "discord",
    href: "https://discord.com/users/460612586061430806",
    hoverFill: "#5865F2",
  },
  {
    icon: "github",
    href: "https://github.com/apacheli",
    hoverFill: "#808080",
  },
  {
    icon: "twitch",
    href: "https://www.twitch.tv/apachelitv",
    hoverFill: "#8d44f7",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/apacheopteryx",
    hoverFill: "#24a3f1",
  },
  {
    icon: "youtube",
    href: "https://www.youtube.com/@apacheopteryx",
    hoverFill: "#ff0000",
  },
]
  .map((social) => (
    <li>
      <SocialIcon
        icon={social.icon}
        href={social.href}
        hoverFill={social.hoverFill}
      />
    </li>
  ));

export default function Footer() {
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
}
