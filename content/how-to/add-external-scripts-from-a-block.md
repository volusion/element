---
title: "Add External Scripts from a Block"
---

## 1. Locate Your Block's 'componentDidMount' Function

Open up `Block.js` and locate the `componentDidMount` or `constructor` function. If those functions don't exist yet, add the appropriate one to your component. You may need to refactor the block to use class syntax.

## 2. Use the 'addScript' Block Util

```javascript
this.props.addScript(
    'https://cdn.domain.net.script.min.js'
);
```

## 3. Protect the Script from Loading When It Shouldn't

There are times that you may not want the script to load. For example in, Site Designer, a unit test, or an AMP request. Add a condition around the code above to restrict when it loads.

```javascript
if (!this.props.isAmpRequest && !this.props.isRendering && typeof window === 'undefined') {
    this.props.addScript(
        'https://cdn.domain.net.script.min.js'
    );
}
```

## Further Reading

See the [Block Utils reference](/references/block-utils#addscript) for optional `addScript` arguments, and more information about `isAmpRequest` and `isRendering`.