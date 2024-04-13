import jsx from "jsx";

const icons = new Map();

export default function Icon({ icon }) {
  const src = `src/assets/${icon}.svg`;
  let svg = icons.get(src);
  if (!svg) {
    svg = Deno.readTextFileSync(src);
    icons.set(src, svg);
  }
  return svg;
}

export function SocialIcon({ icon, href, hoverFill }) {
  return (
    <a href={href} style={`--f: ${hoverFill}`}>
      <Icon icon={icon} />
    </a>
  );
}
