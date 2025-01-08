import Bars from "@icons/Bars.svg";
import Xmark from "@icons/Xmark.svg";

const nav = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
];

export default () => (
    <div class="main-header">
        <a href="/" class="main-header-title">
            <img src="/icon.png" alt="apache.li icon" height="48" width="48" />
            <span>Apacheli</span>
        </a>
        <nav>
            <input type="checkbox" id="nav-check" />
            <label for="nav-check" class="nav-checker nav-check-o">
                <Bars class="icon-hover" />
            </label>
            <label for="nav-check" class="nav-checker nav-check-x">
                <Xmark class="icon-hover" />
            </label>
            <ul class="any-list nav-list">
                {nav.map((li) => (
                    <li>
                        <a href={li.href} class="nav-button" aria-label={li.text}>
                            {li.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);
