---
title: 'Style A Block With Aphrodite'
metaTitle: 'Style A Block With Aphrodite'
metaDescription: 'This how-to guide covers styling a block with Aphrodite, a framework for writing JavaScript-based CSS and creating dynamic classes for use in React.'
---

Aphrodite is a framework for writing JavaScript-based CSS and creating dynamic classes for use in React. You can read more about it in the [official documentation](https://github.com/Khan/aphrodite).

## Writing Your Styles

### 1. Creating User-Editable Props

Sometimes you will want your user to be able to alter the style of their block. Most commonly this comes in the form of changing colors. For a detailed explanation on writing props, see "[Add element Proptypes](/how-to/proptypes)."

### 2. Writing Your Styles File

You will write your CSS in a file called `getStyles.js`. The `getStyles` function argument is your block's props (defined in step 1). By default, the function will look something like this:

```javascript
export const getStyles(blockProps) => ({})
```

You will want to write your CSS in this format:

```javascript
yourClassName: {
  cssRule: ruleProperty
}
```

Example:

```javascript
export const getStyles(blockProps) => ({
    header: {
        backgroundColor: '#fff',
        color: '#000'
    }
})
```

Remember, you're writing Javascript-based CSS, so be sure to use the correct CSS rule names (i.e. `backgroundColor` instead of `background-color`). [View a list of available style rules here.](https://www.w3schools.com/jsref/dom_obj_style.asp)

If you have defined user-editable props, you can reference them like this:

```javascript
export const getStyles({ headerBackgroundColor, headerTextColor }) => ({
    header: {
        backgroundColor: headerBackgroundColor,
        color: headerTextColor
    }
})
```

### 3. Creating Your Classes

When you need to reference your custom styles, you will need to import your `getStyles` function from your styles file as well as `css` and `StyleSheet` from Aphrodite. Afterwards, follow the example below to create your classes object. Once your classes object exists, you can create your dynamic classNames using the following format: `css(classes.YOUR_CLASS_NAME)`.

Example:

```javascriptx
import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getSyles } from './getStyles';

const Block = props => {
    const classes = StyleSheet.create(getStyles(props));
    return (
        <header className={css(classes.header)}>
            // ...
        <header>
    );
};
Block.defaultProps = defaultConfig;
export { Block }
```

### 4. Referencing Your Classes from within Your Components

Simply pass the `classes` props down to your component, import `css` in your component file (just like you did for your Block file), and follow the same process for constructing your class.

Example block code:

```javascriptx
import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getSyles } from './getStyles';
import { Logo } from './components/Logo';

const Block = props => {
    const classes = StyleSheet.create(getStyles(props));
    return (
        <header className={css(classes.header)}>
            <Logo classes={classes} />
        <header>
    );
};
Block.defaultProps = defaultConfig;
export { Block }
```

Example component:

```javascriptx
import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export const Logo = ({ classes }) => (
    <div className={css(classes.logo)}>
        // ...
    <div>
);
```
