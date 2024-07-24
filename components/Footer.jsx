const Discord = await import("../icons/discord.svg");
const GitHub = await import("../icons/github.svg");
const Steam = await import("../icons/steam.svg");
const Twitch = await import("../icons/twitch.svg");
const Twitter = await import("../icons/twitter.svg");
const YouTube = await import("../icons/youtube.svg");

const socials = [
    {
        h: "#5865F2",
        href: "/discord",
        icon: Discord,
    },
    {
        h: "#808080",
        href: "/github",
        icon: GitHub,
    },
    {
        h: "#00adef",
        href: "/steam",
        icon: Steam,
    },
    {
        h: "#8d44f7",
        href: "/twitch",
        icon: Twitch,
    },
    {
        h: "#24a3f1",
        href: "/twitter",
        icon: Twitter,
    },
    {
        h: "#ff0000",
        href: "/youtube",
        icon: YouTube,
    },
].map((social) => (
    <li>
        <a href={social.href} style={`--h: ${social.h}`}>
            {social.icon.default}
        </a>
    </li>
));

const date = new Date();
const year = date.getFullYear();
const month = `${date.getMonth() + 1}`.padStart(2, "0");
const day = `${date.getDate()}`.padStart(2, "0");

export default () => (
    <footer class="main-ftr">
        <nav>
            <ul class="list">{socials}</ul>
        </nav>
        <span>
            Last deployed at <strong>{`${year}-${month}-${day}`}</strong> <a href="https://github.com/apacheli/apacheli.github.io">(Source)</a>
        </span>
        <span>
            Bun <strong>v{process.versions.bun}</strong>
        </span>
        <span>&copy; 2024-present apacheli</span>
    </footer>
);
