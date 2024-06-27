import hljs from "highlight.js";

const __JSX__ = (type, attributes, ...children) => ({
  type,
  attributes: attributes ?? {},
  children,
});

export default __JSX__;

const styleNames = {
  textAlign: "text-align",
};

const _attr = (attribute) => {
  if (typeof attribute === "boolean") {
    return "";
  }
  if (typeof attribute !== "object") {
    return `="${attribute}"`;
  }
  let str = "";
  for (const key in attribute) {
    str += `;${styleNames[key] ?? key}:${attribute[key]}`;
  }
  return str.slice(1);
};

const attributeNames = {
  "className": "class",
};

export const render = (element) => {
  if (typeof element === "function") {
    return render(element());
  }
  if (element === "\n") {
    return "";
  }
  if (typeof element !== "object") {
    return `${element}`;
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
      : hljs.highlight(lang, element.children[0]).value;
  }
  const c = element.children.reduce((a, b) => a + render(b), "");
  if (element.type === null) {
    return c;
  }
  let attributes = "";
  for (const attribute in element.attributes) {
    const b = _attr(element.attributes[attribute]);
    attributes += ` ${attributeNames[attribute] ?? attribute}${b}`;
  }
  return `<${element.type}${attributes}>${c && `${c}</${element.type}>`}`;
};
