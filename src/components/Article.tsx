export default ({ title, description, date, url }) => (
    <a href={url}>
        <article class="blog">
            <header>
                <h2>{title}</h2>
            </header>
            <div>
                <p>{description}</p>
            </div>
            <footer>
                <span>{date}</span>
            </footer>
        </article>
    </a>
);
