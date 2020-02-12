---
title: 'Data Volusion API'
---

The primary goal of an e-commerce store is to sell products. In Element, the Volusion API is where that product data comes from, as well as other information about the store, and data organization such as menus and categories. See the [Volusion API ElementSdk Client Reference](/references/sdk) for all available data.

## 1. Locate Your Get Data File

Open up your block's code and find `getDataProps.js`. It should look like this:

```javascript
export const getDataProps = (utils, props) => Promise.resolve()
```

## 2. Make the Request Call You Need

```javascript
export const getDataProps = (utils, props) => {
  return utils.client.menus
    .get()
    .then(data => {
      return data.items[0].items
    })
    .catch(console.error)
}
```

Menus and Categories don't require any arguments. For other data, such as Products, you'll need an ID or slug from the URI. See [How to Read Page URI Parameters from Your Blocks](/how-to/read-page-uri-parameters-in-blocks) and [How to Add a Page That Depends on URI Parameters](/how-to/add-page-with-uri-parameters).

## 3. Use the Data from Your Block

From your render function located in src/Block.js, you will have the data available:

```javascript
function StarterBlock(props) {
     const posts = props.data;
     ...
}
```
