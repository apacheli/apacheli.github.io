import { CommonBody, CommonHead, dtf, Post } from "../components/common.jsx";
import { ExternalLink } from "../components/markdown.jsx";

const Comments = () => (
  <script
    src="https://giscus.app/client.js"
    data-repo="apacheli/apacheli.github.io"
    data-repo-id="R_kgDOLt0Zpg"
    data-category="General"
    data-category-id="DIC_kwDOLt0Zps4CkjKo"
    data-mapping="title"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="top"
    data-theme="preferred_color_scheme"
    data-lang="en"
    crossorigin="anonymous"
    async
  />
);

const BlogLayout = ({ ctx }) => {
  const date = new Date(ctx.file.meta.date);
  const prev = ctx.app.posts[ctx.file.meta.index - 1];
  const next = ctx.app.posts[ctx.file.meta.index + 1];
  const url = encodeURIComponent(Bun.env.BLUEJAY_URL + ctx.file.url);
  return (
    <html lang="en">
      <CommonHead ctx={ctx}>
        <link href="/assets/markdown.css" rel="stylesheet" />
      </CommonHead>
      <CommonBody ctx={ctx}>
        <div class="content">
          <header class="blog-header">
            <h1>{ctx.file.meta.title}</h1>
            <p>
              <span class="card-tag">{ctx.file.meta.tag}</span> &bull; {dtf.format(date)}
            </p>
          </header>
          <main class="markdown">
            {ctx.file.render(ctx)}
          </main>
          <footer>
            <h2>Share</h2>
            <code>{Bun.env.BLUEJAY_URL + ctx.file.url.slice(0, -5)}</code>
            <div class="share">
              <ExternalLink href={`https://www.facebook.com/sharer.php?u=${url}`} title="Share on Facebook">
                <img src="/assets/facebook.svg" />
              </ExternalLink>
              <ExternalLink href={`https://x.com/intent/tweet?url=${url}`} title="Share on X">
                <img src="/assets/x.svg" />
              </ExternalLink>
              <ExternalLink
                href={`https://www.linkedin.com/sharing/share-offsite?url=${url}`}
                title="Share on LinkedIn"
              >
                <img src="/assets/linkedin.svg" />
              </ExternalLink>
              <ExternalLink href={`https://pinterest.com/pin/create/button?url=${url}`} title="Pin on Pinterest">
                <img src="/assets/pinterest.svg" />
              </ExternalLink>
            </div>
            <Comments />
            <h2>Continue Reading</h2>
            <div class="card-list">
              {prev && <Post file={prev} />}
              {next && <Post file={next} />}
            </div>
          </footer>
        </div>
      </CommonBody>
    </html>
  );
};

export default BlogLayout;
