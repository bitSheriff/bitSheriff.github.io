---
title: "Continuous Build in LaTeX"
summary: "Run LaTeX more like a WYSIWYG editor"
date: 2024-10-03T13:57:22+02:00
draft: true
categories: ["Blog"]
tags: ["linux", "LaTeX"]
featureimage: "" # add external links as feature image
showAuthor: true
showTableOfContents: true
---

Now that the new semester has started and many new people come in touch with LaTeX for the first time, I thought it would be a good idea to write a little bit about how to set up a continuous build system for LaTeX documents. This is especially useful for newer people who are not that familiar with LaTeX and want to see right away how their changes affect the document.

Further this can be an easy step to get into the world of LaTeX from the perspective of a WYSIWYG editor like Word or LibreOffice. Many people rely on the online tool [Overleaf](https://www.overleaf.com/) to write their LaTeX documents, which is a great tool, but it is only online (and not free, if your university does not provide a license) which can be a problem if you are on the go or have a bad internet connection. Another aspect why I love to run in locally is that I can use my favorite editor ([Neovim](https://github.com/neovim/neovim)) and my favorite tools (like [Zathura](https://pwmt.org/projects/zathura/) which is a vim-inspired minimalistic pdf viewer). I opted for these tools because I modified them to my needs and try to keep them as minimalistic as possible to avoid distractions. Working in the browser is not my favorite way to work, because it is too easy to get distracted (I get stuck easily on the [GitHub Explore page](https://github.com/explore) for example) and I am not that productive as I am in my terminal.

## LaTeX Install

First of all, you need to have LaTeX installed on your system. If you are using Linux, you can install it with your package manager. On windows you can use [MiKTeX](https://miktex.org/), which is a popular LaTeX distribution to install the many different packages.

Sadly on Windows, you have to install a lot of packages manually, which can be a bit annoying. On Linux, you can install all packages with your package manager.

## Continuous Build

```
latexmk -pdf -pvc -interaction=nonstopmode
```

The option `-pdf` tells `latexmk` to build a PDF file. The option `-pvc` is for the continuous build of the PDF file when the source file changes. The option `-interaction=nonstopmode` tells `latexmk` to not stop when there is an error but to continue building the PDF file. Especially the last one is very important if you safe the file while you are not finished with the current block. Else it would crash and stop the build process if you are missing a closing bracket for example. So it will tell you that there is an error but it will continue building the PDF file after you fixed the error.

### Downside with Solution

Well, like everything in life there are also downsides to the approach. One is that if you are compiling the file `main.tex` to `main.pdf` and you change a file which is included in `main.tex` but not `main.tex` itself, the build process will not be triggered. So you have to change `main.tex` to trigger the build process. This can be a bit annoying if you have a lot of files and you are working on a specific file and you don't want to change `main.tex` every time you change a file.

**But** if you structure your sub-files in a good way you can avoid this problem by building the sub-file directly.
For this I structure my files like this:

```
.
├── config/
│   └── config.tex
├── sections/
│   ├── section1.tex
│   ├── section2.tex
│   ├── section3.tex
│   └── ...
└── main.tex
```

Each section is included in `main.tex` like this:

```latex
% main.tex
\input{config/config.tex}
\input{sections/section1.tex}
\input{sections/section2.tex}
\input{sections/section3.tex}
```

The sections files are structured like this:

```latex
% section1.tex
\documentclass[../main.tex]{subfiles}
\input{config/config.tex}
\begin{document}

\section{Introduction}

Lorem Ipsum Dolor Sit Amet

\newpage
\end{document}
```

For this to work you need the package _subfiles_ included in every file, I use the `config/config.tex` file for this purpose.

```latex
% config.tex
\usepackage{subfiles}
% other packages
```

So you can build the `section1.tex` file directly with the following command:

```bash
cd sections
latexmk -pdf -pvc -interaction=nonstopmode section1.tex

```

This way you can build up your document step by step and you don't have to change the `main.tex` file every time you change a section file.

### Tip: Use a Command Runner

A _command runner_ is a simple tool that executes long or many commands in a row, triggered by a smaller and more convenient command. The most popular command runner is `make`, which has been around for a long time and is still widely used. It is a simple tool that reads a file called `Makefile` and executes the commands defined in it. The cool extra feature is that it only executes the commands that have changed since the last run, which makes it perfect for compilation tasks where you don't want to recompile everything every time.

The problem with `Makefile` is that the syntax is a bit cryptic and not very user-friendly. So many people tend to use a simple shell script instead. This is fine for small projects, but as soon as you have more than a few commands to run, it quickly becomes a mess, especially if you have arguments to trigger different commands with different options.

Some time ago, I stumbled upon a tool called `just` which is a command runner that is very similar to `make` but with a much simpler syntax. It is written in Rust and is very easy to install and use. I have been using it for a while now and I am very happy with it.

{{< github repo="casey/just" >}}

Here is an example of a `justfile` that compiles all `.tex` files in the current directory to PDF (continuous build):

```make
set shell := ["bash", "-uc"]

# default target
default: build

# build all .tex files once
build:
    latexmk -pdf

# start a process that builds all files on change
building:
    #!/bin/bash
    nohup latexmk -pdf -pvc -interaction=nonstopmode &>/dev/null &
    disown

# clean the build files
clean:
    # remove the files created by latexmk
    @rm -rf *.aux *.lof *. log *.out *.toc
```

The reason why this building command is a bit more complex is that I don't want to see the output of the `latexmk` command in my terminal and I want to start the build process once and then close the terminal or use it for other tasks. So the `nohup` command is used to start the `latexmk` command in the background and the `disown` command is used to detach the process from the terminal so that it is not killed when the terminal is closed.

So with this `justfile` you can run the following commands:

```
just build
```

to build the PDF **once** and

```
just building
```

to start the **continuous build process**.

### PDF Viewer

Now that the PDF is build as it changes you need a PDF viewer that can update on changes. As I said before I use `Zathura` which is a minimalistic PDF viewer that is inspired by Vim. It has a lot of features that I love and it is very fast.

{{< github repo="pwmt/zathura" >}}

To open the PDF file with `Zathura` you can use the following command:

```
zathura main.pdf
```

Of course, you can also use other PDF viewers like `evince` or `okular` which are also very good.

## Conclusion

I know the start with LaTeX can be a bit overwhelming, but if you get used to it, it is a very powerful tool to write professional documents. I hope this little guide helps you to get started with LaTeX and to set up a continuous build system for your documents. If you have any questions or suggestions, feel free to leave a comment below.

---

## Links & Resources

- [LaTeX](https://www.latex-project.org/)
  - [Wikipedia](https://en.wikibooks.org/wiki/LaTeX)
- [MiKTeX](https://miktex.org/)
- [GNU Make](https://www.gnu.org/software/make/)
- [Just](https://github.com/casey/just)
