import { CommonBody, CommonHead } from "../components/common.jsx";

const PageLayout = (ctx) => {
  return (
    <html lang="en">
      <CommonHead ctx={ctx} />
      <CommonBody ctx={ctx}>
        <main class="content">
          {ctx.file.render(ctx)}
        </main>
      </CommonBody>
    </html>
  );
};

export default PageLayout;
