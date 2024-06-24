import __JSX__, { render } from "../server/render.js";

import { Icon } from "./Icon.js";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
].map((link) => (
  <li>
    <a href={link.href}>{link.name}</a>
  </li>
));

const _nav = render(
  <nav>
    <input type="checkbox" id="nav-btn" />
    <label for="nav-btn" class="nav-btn nav-o">
      <Icon icon="bars-solid" />
    </label>
    <label for="nav-btn" class="nav-btn nav-x">
      <Icon icon="xmark-solid" />
    </label>
    <ul class="list">
      {links}
    </ul>
  </nav>,
);

export default function Header({ title }) {
  return (
    <header class="main-hdr">
      <a href="/" class="header-icon">
        <img src="/assets/icon.png" />
        <span>{title}</span>
      </a>
      {_nav}
    </header>
  );
}
