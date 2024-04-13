import jsx from "jsx";

import Icon from "./Icon.jsx";

export default function Header({ title }) {
  return (
    <header class="main-header">
      <a href="/" class="header-icon">
        <img src="/assets/icon.png" height="100%" class="icon" />
        <img src="/assets/icon-dark.png" height="100%" class="icon-dark" />
        <span>{`/ ${title}`}</span>
      </a>
      <nav>
        <input type="checkbox" id="nav-button" />
        <label for="nav-button" class="nav-button nav-o">
          <Icon icon="bars-solid" />
        </label>
        <label for="nav-button" class="nav-button nav-x">
          <Icon icon="xmark-solid" />
        </label>
        <ul class="list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
