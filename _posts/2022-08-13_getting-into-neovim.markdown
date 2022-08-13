---
layout: post
title:  Getting into neovim
description: New way to write code
date:   2022-08-13 12:44:35 +0
image: '/images/devlog_logo.png'
tags:   [blog, devlog, neovim]
---
# Getting into neovim
Well well, it was a pretty intense year and it no end in sight.
First things first. I decided to move to another city and start studying *Computer Science* at the university.
Therefore, I had to cut down my full-time developer job. That's the reason for my absence in the developer universe.
But I hope that now this will change.

## Why?
So I started (a kind of) new project: **vim** especially **neovim**. 
I got hooked by [The Primeagen](https://www.twitch.tv/theprimeagen) and [bashbunni](https://www.twitch.tv/bashbunni). 
A few years ago I was flashed by the productivity boot I gained from **VSCODE** and it's all-round usage. Pretty much every language is supported and
the mass of plugins can be overwhelming. Simply for every usage you can think of, there is something for vscode. Arduino? Yep (i hate the arduino IDE). Debugging on hardware? Oh yess. 
So what was I looking for? Why got me neovim hooked?
I love the idea of coding without needing a mouse. Is it faster than with a mouse? Probably if you practice a loooot. But to be honest I think it needs years and years
of coding vim to get used to all kind of hotkeys, mappings, commands. But it's ok. I have lots of fun, learning these kind of things. 
The fulfilling if you get a shortcut right and save time is hugh.

## Ricing
Something I started quite at the beginning was modifying (*ricing*) my configuration. To be honest, that's probably my biggest bad habit. Before I get into new things I have the deep craving to modify it to death. Yeah that's literally. In most cases I destroy my linux distributions in the first week because I try to install this new dock and this new theme and so on. This time I had the great idea (which is common for linux hard users) to backup my `~/.config/`folder in git. This has the big advantage that I can sync my modifications to all my workstations.

So my idea was to use [NvChad](https://nvchad.github.io/) as a starting point and customize it for my needs. Well not the best idea to be honest. NvChad is a great project, works well BUT it is hugh and you need a better understanding of **vim** and it's language **lua**. So I stood there with big files and could not understand what these commands do. But days and days after watching videos on vim ricing, I slowly got into stuff like the package manager, mapping and startup code. 
Do I understand all these hundreds of lines? Fuck no, BUT I am able to install new plugins and change mappings. This is all I wanted for the start. 
What I love about vim int he modification process? Everything is stored in plain text and stored in git. So if I fuck up (which happened quite often), I just can revert my changes. Sounds like nothing but this is the only reason why it works for more than a week without starting from scratch everytime I wrongly configure a plugin. 

So when is the *ricing* finished? NEVER. In my case. There will alway be a better plugin for something, or a different theme which I like more. So in my case there is no *best configuration* just a *best configuration for now*. 

## The learning process
So probably you heard that the learning curve is very steep. Yeah, unfortunately that is true. If you start learning vim, you have to start to think different.
*What is a word?* *Where does it end?* *What is yank?* *What are modes?* And so on. 
Maybe it is hard, and the only thing that is harder is the voice in your head which whispers *"In vscode it would be done right now..... "*. 
This is the fight I'm fighting right now: the urge to switch back to a simpler editor. 
I know that some day all these hard lessons will cash out. But until this moment you have to fight your inner voice.
So am I qualified to give some advice to you? Probably not, but the only tip I can give to you is using vim EVERYTIME and FOR EVERYTHING. 
Watching videos about vim is great but you will only learn by doing it yourself.

## Wrap up
vim is hard, but very enjoyable once you got to the *break even point*. And do not get lost in the process of customizing neovim.
So if you have any tips or want to connect with me, please reach out to my [twitter](http://twitter.com/bitSheriff).

## Some recommendations and resources
- [Twitch: The Primeagen](https://www.twitch.tv/theprimeagen) 
- [Twitch: bashbunni](https://www.twitch.tv/bashbunni)
- [Github: NvChad](https://github.com/NvChad/NvChad)
- [Github: lvim](https://github.com/lvim-tech/lvim)
- [Github: astrovim](https://github.com/AstroNvim/AstroNvim)