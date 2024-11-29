---
title: "2024 11 29_Unix Philosophy in Note Making"
summary: "What is the Unix Philosophy and how does it fit in Note Making?"
date: 2024-11-29T10:24:52+01:00
lastmod: 2024-11-29T10:24:52+01:00
draft: false
categories: ["Blog"]
tags: [notes, "braindump", "obsidian"]
featureimage: "https://bitSheriff.dev/img/featureimages/brain-dump.jpg" # add external links as feature image
showAuthor: true
showTableOfContents: true
series: ["Note Making"]
series_order: 2
---

A few days ago, I saw posts on Bluesky discussing methodologies about productivity apps. It got me thinking about a quote of Steph Ango, which I included for you:

> "If you want your writings to still be readable on a computer from the 2060s or 2160, it's important that you notes can be read on a computer from the 1960s" - Steph Ango[^file-over-app]

It made a great impression on me, because thinking about the lifespan on my notes was always a thought which was never really resolved. Until I met Obsidian.

Before that, I have excessively used Evernote for private and work related stuff. Very quickly I got the positive effects of maintaining your own knowledge management: I was quicker to extract information than my colleagues. Well, they wrote most stuff done too, but the main point was the _how_. Dozens of _Yellow Sticky Notes_, multiple college notebooks and some documentation digital. I was there too, but in the end, it digitalized all my notes and made them searchable with OCR. But then? Evernote did not fit for me anymore. I was unsatisfied with the online web-app because I used Linux at home, it got more expensive with time and the management options inside the app where just too simple for me.

Parallel to this development, I fell in love with the Linux terminal and used it for (probably too many) small tasks. Manipulating files with tools like `sed`, searching with `find`/`fd` and much more was so "easily" possible. And the great thing is, that anything you can think of was doable with a little self-written script. At around this time I started writing more in Markdown, because it was easy and if the program did not fit me, I could easily change to another of the million available ones.

I always was a believer in **"Use the right tool for the job"**. Yes, you can do probably a lot more with the tool you use right now, but maybe there is a better solution for exactly that use case or problem. With plain text files that's all possible.

For example, I ♥️ Obsidian **but** there are some (edge cases) where it does not work for me. But this is no real problem, because of the markdown files, I can switch to another program which handles this edge case. "Search and Replace Everywhere" is such a thing where Obsidian lacks, but this is no problem for an IDE like vscode, zed or even neovim. Another (fairly new) example: I am very easily distracted in Obsidian because it is so powerful and everywhere I see something which needs some tweaking, so for focus write session I use [Typora](https://typora.io) which is perfect for exactly this use case. It cannot effectively link files, analyze their structure or other note making features but it does not have too because its just here for these writing sessions.

If I would use a closed solution, where the notes are not accessible from outside the app, I would have to search fore the perfect app, which satisfies 100% of my needs. And _spoiler alert_ there is probably no such app, so it would be a never ending search. Similar to Sisyphus [^sisyphus].

So I named the post "Unix Philosophy" what is even that? Well, in this case I would shorten it to _"Make each program do one thing well"_[^unix-phil]. So I think this works perfect with the _"File over App"_-Philosophy[^file-over-app] from Obsidian.

So this was just a little _brain dump_, nothing really special but I wanted to talk about it.

Hope to see you soon again :)

---

## Sources

-   [Steph Ango's Blog](https://stephango.com/)

[^file-over-app]: read the blog post at [Stephen Ango - File over App](https://stephango.com/file-over-app)
[^sisyphus]: Sisyphus is a figure in the greek mythology, which was sentenced to do a "unfinishable" job for eternity [Wikipedia](https://en.wikipedia.org/wiki/Sisyphus)
[^unix-phil]: [Wikipedia](https://en.wikipedia.org/wiki/Unix_philosophy)
