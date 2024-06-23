import __JSX__ from "../server/render.js";

import { readFileSync } from "node:fs";

const _icons = new Map();

export const Icon = ({ icon }) => {
  const src = `icons/${icon}.svg`;
  let svg = _icons.get(src);
  if (svg === undefined) {
    svg = readFileSync(src, "utf8");
    _icons.set(src, svg);
  }
  return svg;
};

export const SocialIcon = ({ icon, h, href }) => {
  return (
    <a href={href} style={`--h:${h}`}>
      <Icon icon={icon} />
    </a>
  );
};
