import type { BluejayContext } from "../../lib/lib.ts";
import { Article } from "../components/common.tsx";

export const metadata = {
	id: "blog",
	title: "Blog",
	description: "I'm apacheli\u2014full-stack web developer and graphic designer.",
};

export default (context: BluejayContext) => {
	return (
		<>
			<h1>Blog</h1>
			<main>{context.app.data.blogs.map(Article)}</main>
		</>
	);
};
