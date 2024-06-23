const __JSX__ = (type, attributes, ...children) => ({
  type,
  attributes: attributes ?? {},
  children,
});

export default __JSX__;

const e = /[A-Z]/g;
const f = (x) => `-${x.toLowerCase()}`;

const _attr = (attribute) => {
  if (typeof attribute !== "object") {
    return `${attribute}`;
  }
  let str = "";
  for (const key in attribute) {
    str += `;${key.replace(e, f)}:${attribute[key]}`;
  }
  return str.slice(1);
}

const attributeNames = {
  "className": "class",
};

export const render = (element) => {
  if (typeof element === "function") {
    return render(element());
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
  const c = element.children.reduce((a, b) => a + render(b), "");
  if (element.type === null) {
    return c;
  }
  let attributes = "";
  for (const attribute in element.attributes) {
    const a = attributeNames[attribute] ?? attribute;
    attributes += ` ${a}="${_attr(element.attributes[attribute])}"`;
  }
  return `<${element.type}${attributes}>${c && `${c}</${element.type}>`}`;
};
