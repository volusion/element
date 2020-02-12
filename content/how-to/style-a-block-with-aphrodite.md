---
title: 'Style A Block With Aphrodite'
---

Aphrodite is a framework for writing JavaScript based CSS and creating dynamic classes for use in React. You can read more about it in the [official documentation](https://github.com/Khan/aphrodite).

## Writing Your Styles

### 1. Creating User-Editable Props

Sometimes you will want your user to be able to alter the style of their block. Most commonly this comes in the form of changing colors. For a detailed explaination on writing props, check our our [documentation for adding proptypes to a block](/how-to/proptypes).

### 2. Writing Your Styles File

You will write your CSS in a file called `getStyles.js`. The `getStyles` function in this file takes 2 arguments. The first is globally available props while the second is your block's props (defined in step 1). By default, the function will look something like this:

```javascript
export const getStyles(globalProps, blockProps) => ({})
```

You will want to write your CSS in this format:

```javascript
yourClassName: {
  cssRule: ruleProperty
}
```

Example:

```javascript
export const getStyles(globalProps, blockProps) => ({
    header: {
        backgroundColor: '#fff',
        color: '#000'
    }
})
```

Remember, you're writing Javascript based CSS, so be sure to use the correct CSS rule names (ie `backgroundColor` instead of `background-color`). [You can view a list of available style rules here.](https://www.w3schools.com/jsref/dom_obj_style.asp)

If you have defined user-editable props, you can reference them like this:

```javascript
export const getStyles({ color }, { headerBackgroundColor, headerTextColor }) => ({
    header: {
        backgroundColor: headerBackgroundColor || color.background,
        color: headerTextColor || color.text
    }
})
```

It's always a good idea to provide a fallback for any user-editable props just in case. In this instance, we specified that the global colors should be the fallback, but you can provide any value you like.

### 3. Referencing Your Classes

Your block should contain the props `css` and `classes` that you can use to reference your new Aphrodite classes by writing them in the following manner: `css(classes.YOUR_CLASS_NAME)`.

Example:

```javascriptx
export const HeaderFactory = React => {
    const Header = ({ css, classes }) => {
        return (
            <header className={css(classes.header)}>
                // ...
            <header>
        );
    };
    return Header;
}
```

### 4. Referencing Your Classes from within Your Components

To do this, you simply need to pass the `css` and `classes` props down to your component and follow same process as step 3.

Example block code:

```javascriptx
export const HeaderFactory = React => {
    const Logo = LogoFactory(React);
    const Header = ({ css, classes }) => {
        return (
            <header className={css(classes.header)}>
                <Logo css={css} classes={classes} />
            <header>
        );
    };
    return Header;
}
```

Example component:

```javascriptx
export const LogoFactory = React => {
    const Logo = ({ css, classes }) => {
        return (
            <div className={css(classes.logo)}>
                // ...
            <div>
        );
    };
    return Logo;
}
```

### 5. Creating Your Classes Manually

You might find yourself using a component frequently enough that you want to extract it for repeat use in multiple blocks. If your component uses Aphrodite classes, you will want to create your classes within your component (via its own `getStyles` file) instead of ensuring that each expected class is passed correctly. You can do this by passing the `StyleSheet` prop down from your block to your component. **NOTE: Global components will not be available to pass down in this manner**. To create your classes object manually, create a variable called `classes` using the following method:

Example block code:

```javascriptx
export const HeaderFactory = React => {
    const NavMenu = NavMenuFactory(React);
    const Header = ({ css, classes, StyleSheet }) => {
        return (
            <header className={css(classes.header)}>
                <NavMenu css={css} StyleSheet={StyleSheet} />
            <header>
        );
    };
    return Header;
}
```

Example component:

```javascriptx
import { getStyles } from './getStyles';

export const NavMenuFactory = React => {
    const NavMenu = props => {
        const { css, StyleSheet } = props;
        const classes = StyleSheet.create(getStyles({}, props));
        return (
            <nav className={css(classes.navWrapper)}>
                // ...
            <nav>
        );
    };
    return NavMenu;
}
```

In the above example, the class `navWrapper` would be a key returned by the component's `getStyles` function.
