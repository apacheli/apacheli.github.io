import { renderMarkdown } from "../components/markdown";

export const meta = {
  title: "Terminal",
  description: "Mess around with commands and other fun stuff.",
  type: "tool",
  tag: "Fun",
};

export default () => (
  <>
    <h1>Terminal</h1>
    <div id="markdown">{renderMarkdown("> [!note] wip")}</div>
  </>
);
