---
title: 'Fetch Data from Third-Party Services'
metaTitle: 'Fetch Data from Third-Party Services'
metaDescription: 'Sometimes we need our blocks to consume third-party data, such as a blog API. In this how-to, we will see how to achieve just that.'
---

Sometimes we need our blocks to consume third-party data, such as a blog API. In this how-to, we will see how to achieve just that.

We will be consuming data from `https://jsonplaceholder.typicode.com/posts`.

## 1. Locate Your Get Data File

Open up your block's code and find `getDataProps.js`. It should look like this:

```javascript
export const getDataProps = (utils, props) => Promise.resolve()
```

## 2. Make the Request Call You Need

```javascript
export const getDataProps = (utils, props) => {
  return utils.client
    .request('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .catch(e => [])
}
```

The `request` function is exactly like the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) function, and works both in the server and on the client.
You don't have to care about importing the right version of the function depending on which environment you are in.

## 3. Use the Data from Your Block

From your render function located in src/Block.js, you will have the data available:

```javascript
function StarterBlock(props) {
     const posts = props.data;
     ...
}
```
