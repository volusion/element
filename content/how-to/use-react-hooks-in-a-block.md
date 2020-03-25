---
title: 'Use React Hooks in an Element Block'
metaTitle: 'Use React Hooks in an Element Block'
metaDescription: 'In Element, React hooks allow you add a state to React functional components without using a class.'
---

# Write a Block Using React Hooks

React hooks allow you add a state to React _functional components_ without using a class. You can read more about it in the [official documentation](https://reactjs.org/docs/hooks-intro.html).

## Using React Hooks in an Element Block

Using hooks in an Element block is the same as using them in any other React component. Here, we'll be modifying the [Starter Block](https://github.com/volusion/element-BlockStarter/blob/master/src/Block.js) to create a stateful component using React hooks.

1. Update your import statement for React to also import the `useState` hook:

```javascript
import React, { useState } from 'react'
```

2. Replace the block component with the following implementation, which uses `useState` to keep track of a stateful `count` variable:

```javascript
function StarterBlock(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

For more details about how and why to use hooks, refer to React's [official documentation](https://reactjs.org/docs/hooks-intro.html).
