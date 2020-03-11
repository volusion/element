---
title: 'Element Concepts'
---

This document describes the basic concepts of the Element platform.

## Blocks

**Blocks** are the basic units of Element that are arranged together to create a Page. Blocks are small, powerful, reusable Javascript applications built with React.

Basic facts about Element blocks:

- Blocks are self-contained—they can be used and developed in isolation of other blocks
- Blocks contain markup in [React](https://reactjs.org/)
- Blocks contain styles in [css-in-js using Aphrodite](/how-to/style-a-block-with-aphrodite)
- Blocks can [fetch data from the Volusion API](/how-to/data-volusion-api) or [any external data source](/how-to/data-third-party-services)
- Blocks can [communicate with other blocks using our built-in PubSub mechanism](/how-to/communicate-between-blocks)
- Blocks have [developer-defined configurations](/how-to/proptypes) that can be adjusted by site owners **after deployment**.

Developing a block is a matter of:

- Using the [Element CLI](/references/element-cli) to get the block boilerplate
- Defining and [implementing a configuration](/how-to/proptypes) (see also: [Working with Element Proptypes Tutorial](/tutorials/proptypes)).
- Selecting and calling the [data sources](/how-to/fetch-data-fast) that will populate the block with meaningful data
- Displaying the data and wiring some interactions (see also: [Building an Element Page Tutorial](/tutorials/building-an-element-page))
- [Styling the block](/how-to/style-a-block-with-aphrodite) to look nice
- Publishing the block and using it in pages (see also: [Building an Element Page Tutorial](/tutorials/building-an-element-page))

## Pages

Pages are an arranged collection of blocks that are [created and customized](/how-to/add-page-to-theme) using [Site Designer](https://admin.volusion.com/designer).

You can add as many blocks as you want on each page using Volusion's default blocks or your own custom blocks. Each block can be configured differently on each page, or you can [use the same configuration across all pages](/how-to/reuse-a-block-across-pages).

## Themes

Themes are a collection of Pages. By default, each store has a live theme that is visible to all site users. You can make different changes to your theme, such as adding a header and footer to all of your pages in a single operation or setting global styles that are visible on all your pages.

When you edit your live theme, a draft copy is created that can be used without changing your live site. You can have as many theme drafts as you want to test ideas. Each theme draft has a preview URL so that you can see what your changes look like before you publish the theme. Once you're ready, you can publish your draft so that it becomes the live theme.

Volusion is an ecommerce platform, and we provide a [basic starter theme](/explanations/e-commerce-pages) for that purpose. However, Element can still be used to build any kind of site. You can create pages to show a blog list and entries, a Q&A page, reviews, a map, a contact form—basically anything you want.
