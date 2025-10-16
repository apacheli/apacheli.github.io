---
title: "2024 - The Year of Experimentation"
description: "A somewhat interesting insight into what I've learned in 2024."
image: "/assets/images/2024-the-year-of-experimentation.png"
type: "blog"
date: "2025-01-08"
tag: "Career"
---

2024 was a pretty lackluster year for me. However, it was also the year when I was the most experimental.
Let's dive into all the cool new gadgets I've played with in 2024.

> [!NOTE]
> Everything you read here is not a promotion. I just like these tools.

## Databases

Managing databases was a new experience for me. When we
were writing a custom application for a client, we needed to reliably manage data
without the risk of corruption. JSON was usually my go-to choice because
it was familiar, but it was _far_ too unreliable for the situation at hand.

That's when we discovered [PostgreSQL](https://www.postgresql.org/), a free and open-source database management system.
It's probably overkill for small applications, but it reliably gets the job done.
It even ships with a cool dashboard called pgAdmin for data visualization.

Making frequent requests to your database can be computationally expensive.
That's where [Redis](https://redis.io/) comes in. Unlike a traditional database, Redis stores your data in memory, making it
much faster and less expensive for your hardware to handle. However, your cache can become stale if you don't update it as often as necessary.
This issue can be mitigated by using expiry dates and event listening.

The biggest flaw about SQL is that it's awful to write. Modern libraries have gotten better,
but SQL injections are still fairly common according to [an OWASP report from 2021](https://owasp.org/Top10/A03_2021-Injection/).
For simple to midsize projects, I recommend using an [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) as it removes writing SQL nonsense
and the potential security risks that come with it. It's still important to be wary of SQL's capabilities, so don't drop it entirely.

## Managing Domains

I purchased this domain about a year ago and added it to my Cloudflare account.
It was surprisingly easy to set it all up through their dashboard.
[Cloudflare](https://www.cloudflare.com/) provides several tools for managing your website, such as analytics, file storage, email routing, and workers.
There's a reason why 20% of all websites rely on them.
However, this also means [the entire world goes down if Cloudflare goes down](https://blog.cloudflare.com/cloudflare-1-1-1-1-incident-on-july-14-2025/), lol.

Learning HTML and CSS is the best way to build websites instead of using something off-the-shelf like Wix and WordPress. It'll take time, but
having full creative control over your website is worth it.
You can also pick up JavaScript for interactivity, but the ecosystem is overwhelming but comprehensive, annoying but innovative, and bloated but robust&mdash;I love it for the same reasons I hate it.

## Building My First PC

Building your first PC requires tons of research before assembling your components.
The first step is to manage your budget, obviously.
The second step is asking yourself what you're using it for. Are you into photo and video editing?
Do you produce music? Do you need to maximize your FPS? These questions ultimately guide you into making the right decisions.
You don't need the newest and flashiest product on the market, but who am I to say? Only you can decide
for yourself. [PCPartPicker](https://pcpartpicker.com/) is a nice tool for picking components based on your needs.

I wanted something for programming and gaming. My work consists of performance optimization, so I needed a processor capable of handling millions
of operations per second without stuttering. The games I play aren't graphically demanding, so I went with a midrange graphics card.
16 gigabytes of memory suffices for most people, but I decided on 32 gigabytes to improve video rendering.

I've made several mistakes too. The most glaring one is ordering a TN monitor instead of an OLED.
TN and LCD panels in general aren't worth it these days. Color accuracy from OLED panels outweighs anything they offer.
Another mistake is that my motherboard doesn't support Bluetooth or Wi-Fi, so I had to buy adapters for them.
Man, that's why research is so important.

## Self-Hosting

My previous computer was repurposed to host my Discord bots, a few Minecraft servers,
a media server using [Jellyfin](https://jellyfin.org/), and a file server using [NextCloud](https://github.com/nextcloud/server). [Homarr](https://homarr.dev/) was also set up on it because it looks nice, and it shows me information about my Docker containers.
Check out [the Awesome-Selfhosted repository](https://github.com/awesome-selfhosted/awesome-selfhosted) for more information.

## Conclusion

That is all.
