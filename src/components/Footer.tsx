import Discord from "@icons/Discord.svg";
import GitHub from "@icons/GitHub.svg";
import Steam from "@icons/Steam.svg";
import Twitch from "@icons/Twitch.svg";
import Twitter from "@icons/Twitter.svg";
import YouTube from "@icons/YouTube.svg";

const nav = [
    { href: "/discord", icon: Discord, h: "#5865F2" },
    { href: "/github", icon: GitHub, h: "#808080" },
    { href: "/steam", icon: Steam, h: "#00adef" },
    { href: "/twitch", icon: Twitch, h: "#8d44f7" },
    { href: "/twitter", icon: Twitter, h: "#24a3f1" },
    { href: "/youtube", icon: YouTube, h: "#ff0000" },
];

export default () => (
    <div class="main-footer">
        <nav>
            <ul class="any-list">
                {nav.map((social) => (
                    <a href={social.href} class="icon-hover nav-icon" style={`--h: ${social.h}`}>
                        <social.icon />
                    </a>
                ))}
            </ul>
        </nav>
        <span>
            &copy; 2024-present apacheli <a href="https://github.com/apacheli/apacheli.github.io">(source)</a>
        </span>
        <span>
            Designed with &#10084;&#65039; and <a href="https://apache.li/bluejay">Bluejay</a>
        </span>
    </div>
);
