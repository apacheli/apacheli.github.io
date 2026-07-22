import { dtf, Post } from "../components/common.jsx";

export const meta = {
  title: "Blog",
  description: "Hi, I'm apacheli.",
};

export default (ctx) => {
  return (
    <>
      <h1>Blog</h1>
      <div class="blog">
        {ctx.data.posts.map((file) => <Post file={file} />)}
      </div>
    </>
  );
};
