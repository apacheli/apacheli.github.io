import { Post } from "../components/common.jsx";

export const meta = {
  title: "Blog",
  description: "Hi, I'm apacheli.",
};

export default ({ app }) => {
  return (
    <>
      <h1>Blog</h1>
      <div class="card-grid">
        {app.posts.map((file) => <Post file={file} />)}
      </div>
    </>
  );
};
