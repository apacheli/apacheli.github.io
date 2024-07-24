import Clickable from "../components/Clickable.jsx";

export const title = "blog";
export const description = "Web and Software Developer";

export default ({ pages }) => {
    return (
        <>
            <h1>Blog</h1>
            <p>I write about stuff.</p>
            <div>
                {pages
                    .filter((page) => page.module.type === "blog")
                    .map((page) => (
                        <Clickable {...page.module} url={`/${page.path.slice(0, -5)}`} />
                    ))}
            </div>
        </>
    );
};
