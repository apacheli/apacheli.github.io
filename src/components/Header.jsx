import jsx from "jsx";

import Icon from "./Icon.jsx";

const links = {
  "Home": "/",
  "About": "/about",
  "Blog": "/blog",
  "Contact": "/contact",
};

const linksList = [];
for (const link in links) {
  linksList.push(
    <li>
      <a href={links[link]}>{link}</a>
    </li>,
  );
}

export default function Header({ title }) {
  return (
    <header class="main-hdr">
      <a href="/" class="header-icon">
        <img src="/assets/icon.png" />
        <span>{title}</span>
      </a>
      <nav>
        <input type="checkbox" id="nav-btn" />
        <label for="nav-btn" class="nav-btn nav-o">
          <Icon icon="bars-solid" />
        </label>
        <label for="nav-btn" class="nav-btn nav-x">
          <Icon icon="xmark-solid" />
        </label>
        <ul class="list">
          {linksList}
        </ul>
      </nav>
    </header>
  );
}
