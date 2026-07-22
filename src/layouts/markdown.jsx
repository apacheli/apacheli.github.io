import { CommonBody, CommonHead } from "../components/common.jsx";

const MarkdownLayout = (ctx) => {
  return (
    <html lang="en">
      <CommonHead ctx={ctx}>
        <link href="/assets/markdown.css" rel="stylesheet" />
      </CommonHead>
      <CommonBody ctx={ctx}>
        <main class="content markdown">{ctx.file.render(ctx)}</main>
      </CommonBody>
    </html>
  );
};

export default MarkdownLayout;
