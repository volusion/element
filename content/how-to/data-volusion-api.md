---
title: "Fetch Data from Volusion's API"
metaTitle: "Fetch Data from Volusion's API"
metaDescription: "This how-to guide will teach you how to fetch data from Volusion's API."
---

The primary goal of an ecommerce store is to sell products. In Element, the product data comes from the Volusion API, along with other information about the store and data organization such as menus and categories. See "[Element SDK Client](/references/sdk)" for all available data.

## 1. Set your tenant ID

You will want to set up your block so that it can simulate being inside of a theme and get real data. It's always faster when you can develop something locally.

The first step is to find your Tenant ID. In your browser, pull up the store you will be developing for. View the source and search for "tenant." Because there are several instances, you might find something like this:

```js
window.ElementSdk.client.configure({tenant: "586aa7bc3e140400156259a5"
```

Back in your IDE, open `local/index.js` and find this line:

```js
const tenantId = '$YOUR_TENANT_ID'
```

Update it with your tenant from the browser source:

```js
const tenantId = '586aa7bc3e140400156259a5'
```

## 2. Locate Your Get Data File

Open up your block's code and find `getDataProps.js`. It should look like this:

```javascript
export const getDataProps = (utils, props) => Promise.resolve()
```

## 3. Make the Request Call You Need

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

Menus and Categories don't require any arguments. For other data, such as Products, you'll need an ID or slug from the URI—see "[Read Page URI Parameters In Blocks](/how-to/read-page-uri-parameters-in-blocks)" and "[Add a Page That Depends on URI Parameters](/how-to/add-page-with-uri-parameters)."

## 4. Use the Data from Your Block

The data will be available from your render function located in src/Block.js:

```javascript
function StarterBlock(props) {
     const posts = props.data;
     ...
}
```
