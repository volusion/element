---
title: "Read Page URI Parameters In Blocks"
---

Sometimes, your blocks may need to read URI parameters from the page, so that you can get data such as the name of the particular product or category that the shopper is viewing.

These URI parameters are also known as **pageVars** in the Element ecosystem.

This guide will show you how to set up a pageVar in your block's config, so that the value will be readable in your block code.

## 1. Create a Private Property for Your pageVar

Locate the definition of your `configSchema` in your block code. Add a new `ElementPropTypes.readOnly` property to your config, and set `isPrivate` to `true`. Using `isPrivate` will make it so that merchants using your block do not see this setting.

Example with a property called `productSlug`:

```javascript
export const getConfigSchema = ElementPropTypes => ({
    productSlug: {
        label: 'Product Slug URI Identifier',
        type: ElementPropTypes.readOnly,
        isPrivate: true
    }
})
```

Note: If you want this value to be editable in the block's settings panel by you or your agency members, you can use `ElementPropTypes.string` instead.

## 2. Set Your defaultConfig to Use 'pageVar:pageUrlText'

Locate the definition of your `defaultConfig` in your block code. Set the value for your pageVar property to be `'pageVar:pageUrlText'`.

Example:

```javascript
export const defaultConfig = { productSlug: 'pageVar:pageUrlText' };
```

## 3. Use the pageVar in Your getDataProps Function

The property that you added to your configSchema will now be available for use in your block's `getDataProps` function. You can use it to retrieve the product data.

Example: (Note: the second argument to `getDataProps()` is the block's props, which are destructured in place)

```javascript
export const getDataProps = (utils, { productSlug }) => {
    return utils.client.products
        .getBySlug(productSlug)
        .then(product => { product })
        .catch(() => {});
};
```

`getDataProps` gets called like this in your block:

```javascript
getDataProps(window.ElementSdk, props)
```

## 4. Set Your Page Path to Use :pageUrlText

1. Navigate to Site Designer, and if you are not already editing your theme, click the **edit** (or **continue editing**) button to open your theme.
2. Click the **pages dropdown** to expand it.
3. Click the **gear icon** for the page that will have your block, for example, Product Details.
4. The settings panel should now be open for your page, and you should see a field for **Page Path**. Ensure that the value at the end of the path is `:pageUrlText`. For example, on the Product Details page, the correct Page Path would be `/p/:pageUrlText`.

## More Data from the URI: Read Query Params from Block Props

Your block's `props` also contain some extra data that can be useful in combination with the pageVar data.

**`props.queryParams`** returns an object with the query params from the page URI.

For example, the URI `https://myvolusionstore.com/c/shirts?page=2&sortBy=Lowest%20Price` will return the following value for `props.queryParams` in your block code:

```javascript
{
    page: '2',
    sortBy: 'Lowest Price'
}
```

### Query Params Are Also Available in getDataProps

```javascript
export const getDataProps = (utils, props) => {
  // you can use props.queryParams here (or queryParams if you destructured the props argument)
```

As an example, you could use query params to figure out which page of results the shopper is viewing, and return corresponding products from the Volusion API.

```javascript
export const getDataProps = (utils, props) => {
    const { queryParams = {} } = props;

    const categoryId = 'something hard coded or from another API request';
    const page = Number(queryParams.page) || 1;
    const sortMethod = queryParams.sortBy || props.defaultSortMethod;
    return utils.client.products
        .getByCategoryId({
            categoryId,
            pageSize,
            page,
            sortMethod
        }).then((data = {}) => {
            // transform data
        }).catch(() => {
            // catch error and return a default response
        });
}
```