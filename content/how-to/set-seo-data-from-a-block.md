---
title: 'Set SEO Data from a Block'
metaTitle: 'Set SEO Data from a Block'
metaDescription: 'The SEO library available from Block Utils lets you set the title and meta tags in the header. Use this when you have a block that loads the primary piece of data for a page, such as a blog post or product detail.'
---

The `seo` library available from [Block Utils](/references/block-utils) lets you set the title and meta tags in the header. The server-side rendering will ensure that they are correct when the site is crawled.

Use this when you have a block that loads the primary piece of data for a page, such as a blog post or product detail.

## 1. Locate Your Get Data File

Open up your block's code and find `getDataProps.js`. It should look like this:

```javascript
export const getDataProps = (utils, props) => Promise.resolve({})
```

## 2. Make a Request to Load Some Data

Replace `getDataProps` with a function like this one that [loads data from Volusion's API](/how-to/data-volusion-api); in this case, getting a product based on the [pageVar read from the URI](/how-to/read-page-uri-parameters-in-blocks).

```javascript
const getDataProps = (utils, props) => {
  const { pageVar } = props
  return utils.client.products.getBySlug(pageVar).then(product => {
    return product
  })
}
```

## 3. Create a Function to Use the SEO Methods

In that same file, write a function that will use the data to call some [seo functions](/references/block-utils#'seo').

```javascript
const generateSeo = (utils, product = {}) => {
  utils.seo.setTitle(product.seo_title)
  utils.seo.setDescription(product.seo_metaDescription)
  utils.seo.addExtraTag('twitter:title', product.seo_title)
}
```

## 4. Connect Them Together

Update your `getDataProps` function so that when it gets product data it calls `generateSeo`.

```javascript
return utils.client.products.getBySlug(pageVar).then(product => {
  generateSeo(utils, product)
  return product
})
```

**Note:** The example above has been simplified from actual production code. You may have more meta tags that you wish to set. It does not `catch()` on missing data or [`throwNotFound()`](/references/block-utils#'thrownotfound'). Production code might also do a better job with the user experience in Site Designer, where you would not have `pageVar` available, and could use [`isRendering`](/references/block-utils#'isrendering') to load alternative data in that environment.
