import Article from "@components/Article";

export const title = "blog";
export const description = "Web and Software Developer";

export default ({ pages }) => {
    return (
        <>
            <h1>Blog</h1>
            <p>I write about stuff.</p>
            <div>
                {pages
                    .filter((page) => page.mod.type === "blog")
                    .sort((a, b) => b.mod.date.localeCompare(a.mod.date))
                    .map((page) => (
                        <Article {...page.mod} url={page.path.slice(0, -5)} />
                    ))}
            </div>
        </>
    );
};
