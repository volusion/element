---
title: 'All The Tech You Need'
---

Developing on Element should be straightforward for developers who are familiar with React. Element follows standard conventions and strives for a developer-friendly experience.

## React

We use [React](https://reactjs.org/) as the main framework. Our sites use simple components with local state. We don't use state management packages (like Redux or Mobx); you probably won't need one, but you can add one if you want. For component communication, we use a simple [PubSub](/how-to/communicate-between-blocks) mechanism.

## CSS

For CSS, we use `css-in-js` that plays nicely with React. Read about using this technique to style your components [here](/how-to/style-a-block-with-aphrodite).

## Element CLI

To interact with Element, we developed a [CLI](/how-to/env-setup) that makes your workflow easier. The CLI uses **git** branches to manage multiple versions of your blocks.

## SDK

When coding, you might need to access `ecommerce` data and other goodies. Each block will have access to an [SDK](/references/sdk) that will help you
get things done in your blocks.

## AMP (optional)

Element is [AMP](https://amp.dev/documentation/)-ready, and we provide tools to keep your site AMP compliant. This is optional, but recommended
to get all the benefits of AMP.
