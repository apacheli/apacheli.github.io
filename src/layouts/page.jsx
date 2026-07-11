import { CommonBody, CommonHead } from "../components/common.jsx";

const PageLayout = (ctx) => {
  return (
    <html lang="en">
      <CommonHead ctx={ctx} />
      <CommonBody ctx={ctx}>
        <div class="content">
          {ctx.file.render(ctx)}
        </div>
      </CommonBody>
    </html>
  );
};

export default PageLayout;
