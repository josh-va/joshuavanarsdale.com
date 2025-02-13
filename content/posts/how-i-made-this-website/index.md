---
title: "This Website Costs Me Less Than A Five Guys Cheeseburger"
subtitle: "And is 19 times cheaper than SquareSpace"
date: 2025-02-13
draft: false
summary: "How I built and maintain a personal website for less than the cost of a single meal."
---

A Five Guys cheeseburger from my local store clocks in at **$11.39**.

But running this website—live, accessible, and fully functional—costs me just **$10.44** a year.

Almost a dollar less, and I'm still missing fries and a drink...

![Burger](featured.jpg)

## Breaking down the $10.44?

The **only** cost I pay is **$10.44 a year** for my domain name: _joshuavanarsdale.com_.

That's it.

**$0** additional upfront.

**$0** additional ongoing.

And **0** shady dealings to make this all happen.

## But you can't run a website with just a domain name!

Of course you need more than just a domain name to have a functioning website, but there's a world full of free and low-cost solutions. They might take a bit more time and effort to set up, but they're so much more rewarding - for you, your skills, and your wallet.

For example, I pay nothing for:

- Hosting
- SSL certificates
- Emails
- Themes and extensions

I use the free and open source theme [Blowfish](https://github.com/nunocoracao/blowfish), and I haven't needed to pay for a single premium plugin or add-on feature to accomplish everything I want.

Compare what I'm paying to **Squarespace's base plan**, which at the time of writing is sitting at **$192 a year** (after your first-year freebies). That's more than **18 times as much** in the first year, and **more than 19 times as much** every year after.

## What do you get with Squarespace for $192?

Don't get me wrong, you'll _get_ a lot more 'stuff' from a Squarespace subscription:

- A simple to use design studio
- A huge selection of templates
- Ready-made extensions and e-commerce tools
- SEO and marketing tools

But for me, that's **$192** on features I have no intention of using.

- I don't plan on using their Squarespace AI to generate content.
- I don't want to continue to pay for themes and extensions that I don't need.
- I don't plan on selling mugs with my face on them (yet).

## So... Do you really need to pay for a website?

I mean, maybe... It depends on what you want.

I wanted a simple site where I could control my online presence, showcase my resume and write about my journey. To do this, I wanted something fast, easy to maintain, and gave me flexibility to build what I needed.

If that dounds like what you need, you probably don't need to pay for anything more than a domain name.

And if you're just getting started and don't even know if you want to commit to maintaining a website, you can even get started and go live for **$0** and get a domain name down the line when you feel like taking that next step.

## How did I build this site?

![Hugo Logo](hugo.svg)

I built this site using **Hugo**.

**Hugo** is a static site generator that enables you to create fast, lightweight and secure websites without needing any expensive hosting. Unlike platforms like WordPress and Squarespace, there's no need to have a backend or paying for all the resources required to support constant updates needed to ensure they stay secure. Hugo simply builds the static HTML files for my site and then allows me to easily push them almost anywhere with minimal resources. This makes **Hugo** a fantastic option to easily build personal sites, blogs and portfolios.

### What's in a Hugo site?

At its core, Hugo sites are very simple:

- **Templates** define the structure and layout of each page
- **Markdown files** store all the content in the pages (like this page)
- **GitHub** stores all of my website files in a [repository](https://github.com/josh-va/joshuavanarsdale.com)
- **Hugo** then compiles everything into a static website which can be hosted almost anywhere

## Keeping my costs low

### $10.44 for a domain? That's cheap!

There are dozens of places where you can go to find a domain, but most of them slap on extra costs and fees that you really don't need to be paying for.

Here's what I found:

- **GoDaddy**: $21.99 a year after the first-year discount
- **Namecheap**: $14.98 a year after the first-year discount
- **Cloudflare**: $10.44 a year, for at-cost pricing

Cloudflare was easily the cheapest long-term option, offering domains at their cost price, rather than adding on additional fees.

### Free hosting? Yep!

Static sites are tiny, lightweight and portable, so they qualify for free hosting on several platforms.

Some options include:

- **Cloudflare Pages** (my choice)
- **GitHub Pages**
- **Netlify**

Whenever I push a change to my main branch in my GitHub repository, this triggers Cloudflare workers to rebuild my website which is live at _joshuavanarsdale.com_.

This takes about 30 seconds between when I merge the changes in and it goes live to the world.

And if I need to test any branches before they go public, I can build staging versions of my site that are privately accessible to make sure there's no issues.

### Free SSL certificates?

**Cloudflare** throws that in too, along with a Web Application Firewall to help keep the nasties away.

### Free email forwarding?

I really didn't want yet another email address to constantly check in on, so I used **Cloudflare's Email Routing** to simply forward emails from my domain across to my existing personal email address. I also use **Mailgun's Free Tier** integration to get messages out of my contact form and forwarded across to me. Yet more **$0** tools to do all of the basics without additional overhead.

## But why does all of this even matter?

Because too many people believe websites are inherently expensive to build and maintain.

Even "discount" hosting packages can add up quickly, especially if you don't know what you need or what you want to accomplish. But this model of website hosting isn't the only way to get your presence online.

If you're willing to put in a little bit of effort, and ride on the back of people who've done 90% of the heavy lifting already, you can build yourself a personal website that you have complete control over for **less than the cost of a Five Guys cheeseburger**. And in the process, you'll build some valuable skills and complete control over your online presence.

It doesn't have to be a perfect, award-winning design (this site certainly isn't) but it'll be **yours**.

## What now?

This post has covered the basics of how I got this website up and running, but I want anyone to feel empowered to be able to do something like this themselves.

I've got the [repository](https://github.com/josh-va/joshuavanarsdale.com) for this website public and accessible so that you can poke around and see what I did.

Is my code perfect? Far from it.

Are there inconsistencies, and errors? Yup.

This site is a learning experience for me too, and it's a live project that will grow and develop as I do.

If you have a look around and find some issues, please reach out to me!
