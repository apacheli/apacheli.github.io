import { CommonBody, CommonHead } from "../components/common.jsx";

const ToolLayout = ({ ctx }) => {
  return (
    <html lang="en">
      <CommonHead ctx={ctx}>
        <link href="/assets/markdown.css" rel="stylesheet" />
        <link href="/assets/tool.css" rel="stylesheet" />
      </CommonHead>
      <CommonBody ctx={ctx}>
        <main class="content">
          {ctx.file.render(ctx)}
        </main>
      </CommonBody>
    </html>
  );
};

export default ToolLayout;
