export default ({ title, description, date, url }) => (
    <a href={url}>
        <article>
            <header>
                <h2>{title}</h2>
            </header>
            <div>
                <p>{description}</p>
            </div>
            <footer>
                <span class="author">apacheli</span>
                <span> - {date}</span>
            </footer>
        </article>
    </a>
);
