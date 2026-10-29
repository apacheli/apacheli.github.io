import { FileCard } from "../components/common.jsx";

export const meta = {
  title: "Blog",
  description: "Hi, I'm apacheli.",
};

export default ({ ctx }) => {
  return (
    <>
      <h1>Blog</h1>
      <div class="card-grid">
        {ctx.app.posts.map((file) => (
          <FileCard file={file} icon="newspaper" />
        ))}
      </div>
    </>
  );
};
