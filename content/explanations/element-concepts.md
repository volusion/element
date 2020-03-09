---
title: 'Element Concepts'
---

This document describes the basic concepts of the Element platform.

## Blocks

**Blocks** are the basic unit of Element. Blocks are powerful; they are small, reusable Javascript applications built with React. Blocks are arranged together to create a Page. Here are some basic facts about Element blocks:

- Blocks are self contained---they can be used and developed in isolation of other blocks
- Blocks contain markup in [React](https://reactjs.org/)
- Blocks contain styles in [css-in-js using Aphrodite](/how-to/style-a-block-with-aphrodite)
- Blocks can [fetch data from the Volusion API](/how-to/data-volusion-api) or [**any external data source**](/how-to/data-third-party-services)
- Blocks can [communicate with other blocks using our built-in PubSub mechanism](/how-to/communicate-between-blocks)
- Blocks have [developer-defined configurations](/how-to/proptypes) that can be adjusted by site owners **after deployment**.

Developing a block is a matter of:

- Using the [Element CLI](/references/element-cli) to get the block boilerplate
- Defining and [implementing a configuration](/how-to/proptypes). See also: [Intro tutorial](/tutorials/proptypes).
- Selecting and calling the [data sources](/how-to/fetch-data-fast) that will populate the block with meaningful data
- Displaying the data and wiring some interactions. ([Building an Element Page Tutorial](/tutorials/building-an-element-page))
- [Styling the block](/how-to/style-a-block-with-aphrodite) to look nice.
- Publishing the block and using it in pages. ([Building an Element Page Tutorial](/tutorials/building-an-element-page))

## Pages

Pages are an arranged collection of blocks. Currently, Pages are [created](/how-to/add-page-to-theme) and customized using the [Site Designer](https://admin.volusion.com/designer).

In a page, you can add as many blocks as you want. You can use Volusion's default blocks, or you can use your own. Each block can be configured differently on each page or [use the same configuration across all pages](/how-to/reuse-a-block-across-pages). It all depends on what you want to achieve.

## Themes

Themes are a collection of Pages. By making changes to your theme, you can do things like add a header and footer to all of your pages in a single operation or set global styles that are visible on all your pages. Themes can be previewed. This allows you to make changes to a design without affecting your live site. Those changes can even be rolled back.

There are many more things you can do with themes.

By default, each store has a live theme that is visible to all your site users. When you perform an edit to your live theme, a draft copy is created that can be used without affecting your site. You can apply as many changes as needed without fear. Once you are ready, you can promote your copy to be the live theme by publishing it. You can have as many themes as you want to test ideas. Each theme has a preview URL so that you can see what your changes look like without having to publish the theme.

### The E-Commerce Theme

Volusion is an e-commerce platform and we provide a [basic starter theme](/explanations/e-commerce-pages) for that purpose. You can still use Element to build any kind of sites, not just e-commerce. You can create pages to show a blog list and entries, a Q&A page, reviews, a map, a contact form, basically anything you want. 
