import jsx from "jsx";

import { SocialIcon } from "./Icon.jsx";

export default function Footer() {
  return (
    <footer class="main-footer">
      <nav>
        <ul class="list">
          <li>
            <SocialIcon
              icon="discord"
              href="https://discord.com/users/460612586061430806"
              hoverFill="#5865F2"
            />
          </li>
          <li>
            <SocialIcon
              icon="github"
              href="https://github.com/apacheli"
              hoverFill="#808080"
            />
          </li>
          <li>
            <SocialIcon
              icon="twitch"
              href="https://www.twitch.tv/apachelitv"
              hoverFill="#8d44f7"
            />
          </li>
          <li>
            <SocialIcon
              icon="twitter"
              href="https://twitter.com/apacheopteryx"
              hoverFill="#24a3f1"
            />
          </li>
          <li>
            <SocialIcon
              icon="youtube"
              href="https://www.youtube.com/@apacheopteryx"
              hoverFill="#ff0000"
            />
          </li>
        </ul>
      </nav>
      <span>© 2024-present apacheli</span>
    </footer>
  );
}
