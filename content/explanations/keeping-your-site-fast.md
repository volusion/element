---
title: 'Keeping Your Site Fast'
---

As you may already know, Element is optimized for speed. By following the advice in this document, you can keep your speed
indicators in the green. The fastest experience possible will please your users and increase your earnings.

## Reduce the Number of Requests Performed in the Server

If you need to fetch data in the server side render phase for SEO purposes, think about which data you really need in first
paint and delay the information that can be fetched in the client. For example, in a product details page, we can
fetch the product data in the server but delay the cart data to be fetched in the client, as there is no value in server
side rendering the cart.

Remember that the `componentDidMount` lifecycle method only runs in the browser. It is safe to make any browser requests
inside that method.

## Parallel requests

Always fetch your data in parallel and avoid sequential data fetches if you can. We already discussed this here on
[fetching data fast](/how-to/fetch-data-fast).

## Keep Your Block Size Small

One of the easiest ways to explode your block size is by adding dependencies. For example, instead of adding the entire `lodash`
library, use the individual functions packages and install as needed. Example:

```js
import isEqual from 'lodash/isEqual'
```

Additionally, if you are using a package that will be used exclusively in the client like an input validation library, consider
adding the script in the head tag instead of adding those extra KB to the block bundle. Example:

```js
constructor() {
  props.addScript('https://unpkg.com/accounting@0.4.1/accounting.js');
}
```

## Make Sure Your Dependencies Are Bundled Once

Related to the previous advice, if you have five blocks in your page, and each one has the `lodash` library installed, you will
be bundling that library five times. Instead, follow the advice presented previously and add the `lodash` dependency once as a script
in the head of the html. If multiple blocks load the same script, Element is smart enough to only load it once.

In case you are unsure, installing a dependency means running `npm install dep_name` and then importing your dependency in your block code.

## Keep Your CSS simple

Keeping your CSS simple is another way of creating fast sites. This will also help you making your site AMP compatible.

## Avoid SetTimeouts and Blocking Operations

Make sure your timeouts are not run in the server as it will slow down and block your requests. Feel free to use timeouts but only after
the block is hydrated in the client. A rule of thumb is avoiding those operations in the `getDataProps` function and in the block constructor.

## Evaluate the Impact of Third Party Scripts

Third party scripts are very useful to provide experiences like live chat, reviews, tracking and others. When adding a script to your page
you might be affecting your speed. Make sure you understand the costs associated to each script added to your site.
