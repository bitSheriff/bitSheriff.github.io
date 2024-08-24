---
title: "NorseVPN"
date: 2022-02-02
#externalUrl: ""
summary: "A nordVPN GUI client for linux"
showReadingTime: true
showLikes: false
showViews: false
categories: ["Project"]
_build:
  render: "false"
  list: "local"
---

<img src="https://github.com/bitSheriff/norsevpn/blob/main/doc/img/logo/NorseVPN_transparent%20.png?raw=true" width="300" height="300" />

[Repository](https://github.com/bitSheriff/norsevpn)

## Intro

Before every (good) project, there is a problem which requires a solution.
In this case the _problem_ is that [nordVPN](www.nordvpn.com) has no gui client for linux. There is only a cli application which can be a bit complicated to
handle and if you use a VPN on a daily basis it gets very unhandy. So the only solution was to build a small tool for that. So time after time more and more features
were supported and even some which the cli application does not include.

## The official CLI

[The NordVPN application](https://nordvpn.com/de/download/linux/) for linux only supports a cli version.

A connection can be established by choosing a country and a city.

```sh
    $ nordvpn c Austria Vienna
```

Which countries and cities are available? Well this is not easily displayed.

```sh
   $ nordvpn cities [country]
```

## My GUI

_To be clear NorseVPN is only a wrapper. So it does not communicate with the NordVPN servers._
