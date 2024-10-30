// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Vienna",
    scale: "C",
  },
  clock: {
    format: "h:i",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://bitsheriff.dev",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Quick",
      background_url: "src/img/banners/bg-3.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "readwise reader",
              url: "https://read.readwise.io/",
              icon: "book",
              icon_color: palette.green,
            },
            {
              name: "cashew",
              url: "https://budget-track.web.app",
              icon: "cash",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "tuta",
              url: "https://app.tuta.com",
              icon: "mail",
              icon_color: palette.red,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
            {
              name: "ticktick",
              url: "https://ticktick.com/webapp",
              icon: "checkbox",
              icon_color: palette.rosewater,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "mastodon",
              url: "https://mastodon.social",
              icon: "brand-mastodon",
              icon_color: palette.blue,
            },
            {
              name: "reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: palette.rosewater,
            },
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "endel",
              url: "https://endel.io",
              icon: "dna",
              icon_color: palette.yellow,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "projects",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.sapphire,
            },
            {
              name: "dotfiles",
              url: "https://github.com/bitsheriff/dotfiles",
              icon: "settings",
              icon_color: palette.green,
            },
            {
              name: "blog",
              url: "https://github.com/bitsheriff/bitsheriff.github.io",
              icon: "blockquote",
              icon_color: palette.lavender,
            },
            {
              name: "SatanOS",
              url: "https://github.com/bitsheriff/SatanOS",
              icon: "ghost-2",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "local services",
          links: [
            {
              name: "router",
              url: "10.0.0.138",
              icon: "router",
              icon_color: palette.mauve,
            },
            {
              name: "cryptulhu",
              url: "192.168.8.1",
              icon: "binary-tree-2",
              icon_color: palette.teal,
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "Caschy",
              url: "https://stadt-bremerhaven.de/",
              icon: "brand-prisma",
              icon_color: palette.blue,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "dev.to",
              url: "https://dev.to",
              icon: "brand-react",
              icon_color: palette.green,
            },
            {
              name: "obsidian forum",
              url: "https://forum.obsidian.md/",
              icon: "keyframes",
              icon_color: palette.maroon,
            },
            {
              name: "terminal trove",
              url: "https://terminaltrove.com",
              icon: "terminal-2",
              icon_color: palette.teal,
            },
          ],
        },
      ],
    },
    {
      name: "uni",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "tu wien",
          links: [
            {
              name: "tiss",
              url: "https://tiss.tuwien.ac.at/",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "tuwel",
              url: "https://tuwel.tuwien.ac.at/my/",
              icon: "geometry",
              icon_color: palette.blue,
            },
            {
              name: "tu chat",
              url: "https://chat.tuwien.ac.at/home",
              icon: "messages",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "writing",
          links: [
            {
              name: "overleaf",
              url: "https://overleaf.com",
              icon: "leaf",
              icon_color: palette.sapphire,
            },
            {
              name: "detexify",
              url: "http://detexify.kirelabs.org/classify.html",
              icon: "pencil",
              icon_color: palette.mauve,
            },
            {
              name: "deepL",
              url: "https://www.deepl.com/translator",
              icon: "language",
              icon_color: palette.green,
            },
            {
              name: "languageTool",
              url: "https://languagetool.org/",
              icon: "bug-off",
              icon_color: palette.maroon,
            },
          ],
        },
        {
          name: "research",
          links: [
            {
              name: "catalog plus",
              url: "https://catalogplus.tuwien.at/primo-explore/search",
              icon: "books",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "learn",
      background_url: "src/img/banners/calc.webp",
      categories: [
        {
          name: "languages",
          links: [
            {
              name: "babbel",
              url: "https://babbel.com/",
              icon: "flag",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "coding",
          links: [
            {
              name: "udemy",
              url: "https://udemy.com",
              icon: "underline",
              icon_color: palette.sapphire,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
