import hljs from "highlight.js";

const __JSX__ = (type, attributes, ...children) => ({
  type,
  attributes: attributes ?? {},
  children,
});

export default __JSX__;

const attributeNames = [
  "aria-",
  "className",
  "data-",
];

export const render = (element) => {
  if (typeof element === "function") {
    return render(element());
  }
  if (element === "\n") {
    return "";
  }
  if (typeof element !== "object") {
    return `${element}`.replace(/\n/g, " ");
  }
  if (Array.isArray(element)) {
    return element.reduce((a, b) => a + render(b), "");
  }
  if (typeof element.type === "function") {
    return render(element.type(element.attributes, element.children));
  }
  if (element.type === "code") {
    const lang = element.attributes.className?.slice(9);
    return lang === undefined
      ? `<code>${element.children[0]}</code>`
      : hljs.highlight(lang, element.children[0].slice(0, -1)).value;
  }
  if (element.type === "img") {
    element.attributes.loading = "lazy";
  }
  const c = element.children.reduce((a, b) => a + render(b), "");
  if (element.type === null) {
    return c;
  }
  let attributes = "";
  for (const attribute in element.attributes) {
    if (attributeNames.some((a) => attribute.startsWith(a))) {
      continue;
    }
    const a = element.attributes[attribute];
    attributes += ` ${attribute}${typeof a === "boolean" ? "" : `="${a}"`}`;
  }
  return `<${element.type}${attributes}>${c && `${c}</${element.type}>`}`;
};
