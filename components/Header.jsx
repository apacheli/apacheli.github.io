const Bars = await import("../icons/bars-solid.svg");
const Xmark = await import("../icons/xmark-solid.svg");

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Blog",
        href: "/blog",
    },
    {
        name: "Contact",
        href: "/contact",
    },
].map((link) => (
    <li>
        <a href={link.href}>{link.name}</a>
    </li>
));

export default ({ title }) => {
    return (
        <header class="main-hdr">
            <a href="/" class="header-icon">
                <img src="/assets/icon.png" alt="icon" />
                <span>{title}</span>
            </a>
            <nav>
                <input type="checkbox" id="nav-btn" />
                <label for="nav-btn" class="nav-btn nav-o">
                    {Bars.default}
                </label>
                <label for="nav-btn" class="nav-btn nav-x">
                    {Xmark.default}
                </label>
                <ul class="list">{links}</ul>
            </nav>
        </header>
    );
};
