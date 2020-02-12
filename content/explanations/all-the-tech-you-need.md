---
title: 'All The Tech You Need'
---

Developing on the Element platform should be straightforward for developers who are familiar with React. Element follows standard conventions and strives for a developer-friendly experience.

## React

We use [React](https://reactjs.org/) as the main framework. We don't use state management packages (like Redux or Mobx), and
you probably won't need it but you can add it if you want. Our sites use simple components with local state each. For component communication, we use a simple
[PubSub](/how-to/communicate-between-blocks) mechanism.

## CSS

For CSS, we use `css-in-js` that plays nicely with React. You can read [here](/how-to/style-a-block-with-aphrodite) how to use
this technique to style your components.

## Element CLI

In order to interact with Element, we developed a [CLI](../../how-to/env-setup) for making your workflow easier. The CLI uses **git** branches to manage
multiple versions of your blocks.

## SDK

When coding, you might need to access `e-commerce` data and other goodies. Each block will have access to an [SDK](/references/sdk) that will help you
getting things done in your blocks.

## AMP (optional)

The Element platform is [AMP](https://amp.dev/documentation/) ready. We provide some tools to keep your site AMP compliant. This is optional but recommended
to get all the AMP benefits.
