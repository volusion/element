---
title: "Environment Setup"
---

In this how-to guide, we will cover setting up your environment so that you can begin developing blocks with Element.

## Supported Platforms

Block development is supported in macOS, Linux, and Windows.

## 1. Install Node.js

If you do not already have Node.js installed, [follow the instructions here to do so](https://nodejs.org/en/download/).

## 2. Use the Right Node Version

You should be using Node `v8.11.3`

If you don't have [Node Version Manager](https://github.com/nvm-sh/nvm), you should install it.

Then run this command in your terminal:

```shell
nvm install 12.14.1
```

## 3. Install Git

If you don't have Git on your system, [follow the instructions here to install it](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## 4. Install Element CLI

To install [Element CLI](https://github.com/volusion/element-cli), run this command in your terminal:

```shell
npm install -g @volusion/element-cli
```

## 5. Create an Account on volusion.com

If you don't have one already, go to [volusion.com](https://www.volusion.com/) to create an account.

## 6. Log in to Element CLI

Run this command in your terminal:

```shell
element login
```

Then, enter the email address and password for your Volusion account.

## 7. Get Approved to Develop Blocks

You need approval from Volusion to begin developing blocks.

For instructions, see the [guide for how to become approved as a block developer](/how-to/get-approved-to-develop-blocks).

## 8. Start Developing

You're now ready to start developing blocks.

A good next step would be to follow the [tutorial for building an element page with blocks](/tutorials/building-an-element-page).
