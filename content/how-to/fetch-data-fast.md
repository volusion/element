---
title: 'Fetch Block Data Fast'
metaTitle: 'Fetch Block Data Fast'
metaDescription: 'This how-to guide demonstrates how to fetch data as efficiently as possible using asynchronous requests in JavaScript.'
---

In this how-to, we demonstrate how to fetch data as efficiently as possible using asynchronous requests in JavaScript. As site speed is paramount to the end user experience, we recommend this technique.

Let's consider the following code in that might appear in `getDataProps.js`:

```javascript
export const getDataProps = (utils, props) => {
  return utils.client.categories.get().then(categories => {
    return utils.client.menus.get().then(menus => {
      return {
        categories,
        menus,
      }
    })
  })
}
```

This code has room for optimization. Both `get()` calls are carried out serially even though there is no dependency between `menus` and `categories`. We can reduce the overall request latency by making both requests in parallel:

```javascript
export const getDataProps = (utils, props) => {
  const categoriesPromise = utils.client.categories.get()
  const menusPromise = utils.client.menus.get()

  return Promise.all([categoriesPromise, menusPromise]).then(
    ([categories, menus]) => {
      return {
        categories,
        menus,
      }
    }
  )
}
```

With this simple change, the `categories` and `menus` data will each be fetched concurrently, reducing latency.

Please keep the following in mind:

- Currently, Element does not support async/await—you need to use promises. This will be remedied soon.
- When fetching data, think about the dependencies between the information you are fetching. If no dependency exists, fetch the data concurrently to reduce latency and exploit the fastest server-side rendering possible.
