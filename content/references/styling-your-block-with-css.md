---
title: 'Styling Your Block With CSS'
metaTitle: 'Styling Your Block With CSS'
metsDescription: 'Style your VOLT site with Atomic CSS: a mobile-first, layout-focused, CSS library based on Tachyons.'
---

## Table of contents

- [Atomic CSS Framework](#atomiccssframework)
- [Aphrodite](#aphrodite)
- [joinClasses()](#joinclasses)
- [Inline Styling](#inlinestyling)
- [Best Practices](#bestpractices)

## Atomic CSS Framework

[Atomic](https://github.com/volusion/element-atomic-css) is a [mobile-first](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first), layout-focused, CSS library based on Tachyons for use on VOLT storefronts. The intention is to provide only the most frequently used CSS for constructing your content.

### Why is the framework so small?

There are a couple reasons for this:

- Atomic has been extremely trimmed down from the original Tachyons library because Google will penalize you for significant amounts of unused CSS.
- To build sites that are [Google AMP](https://developers.google.com/amp) compliant, you can use no more than [50 KB of CSS](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/). This includes inline styling, external stylesheets, and custom Aphrodite CSS. Keeping a small file size provides the user with breathing room to add blocks to their site without worrying about invalidating it with Google AMP.

### Why not use a CSS purifier?

- A CSS purifier cannot be used because our blocks are built on React. This means that you can have a large amount of content that does not exist in the DOM until a requirement is met, like a modal or a mobile push menu. If we used a purifier and that content did not exist in the DOM when the page first loads, the CSS for that content could be removed if the same classes are not also used elsewhere on the page.
- Because you cannot run JavaScript on Google AMP pages, the above issue is not a concern on AMP, so we still run a CSS purifier on Google AMP pages to make sure they get the best possible Google scores.

### Where can I learn more about the Atomic classes?

We've included reader-friendly links below for each "classification" of css rules as well as the entire Atomic library. A quick search for your desired styles will show you what your options are.

#### Individual Stylesheets

- [box-sizing](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/box-sizing.css)
- [coordinates](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/coordinates.css)
- [display](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/display.css)
- [flexbox](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/flexbox.css)
- [height](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/height.css)
- [images](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/images.css)
- [lists](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/lists.css)
- [max-width](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/max-width.css)
- [normalize](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/normalize.css)
- [overflow](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/overflow.css)
- [position](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/position.css)
- [skins](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/skins.css)
- [spacing](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/spacing.css)
- [text-align](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/text-align.css)
- [text-decoration](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/text-decoration.css)
- [utilities](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/utilities.css)
- [vertical-align](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/vertical-align.css)
- [width](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/width.css)
- [z-index](https://github.com/volusion/element-atomic-css/blob/master/dist/styles/z-index.css)

#### All of Atomic

- [Atomic](https://github.com/volusion/element-atomic-css/blob/master/dist/atomic.css)

### How do I use Atomic?

The Atomic library is loaded anywhere your blocks are used, so there's no extra effort needed to pull it in. As far as using the classes, it's no different than referencing any other class in React. Example:

```jsx
<div className="flex flex-wrap">
  <div className="w-100 w-60-l">{/* Your content here */}</div>
  <div className="w-100 w-40-l">{/* Your content here */}</div>
</div>
```

## Aphrodite

When the Atomic classes aren't enough to meet your needs, you'll want to write custom styling with Aphrodite. For more information, see "[Styling a Block With Aphrodite](/how-to/style-a-block-with-aphrodite)."

## 'joinClasses()'

`joinClasses` is a helper function provided by the SDK that can be found in your block props. It is meant to join your classes together into a single string and contains some extra logic to ensure that your class list is clean and free of unintended classes and whitespace.

#### It will:

- Accept any number of arguments and join them all together with a single space between each one.
- Remove any unnecessary whitespace that might be caused before, between, or after your final classes.
- Support conditional logic for which classes should be included.
- Remove any invalid classes that might be output by bad logic (removes `undefined`, `null`, and `false`), which is the biggest reason to use it over string literals.

#### How to use it:

```jsx
<div
  className={joinClasses(
    'flex items-center w-100',
    css(classes.yourCustomAphroditeClassA, classes.yourCustomAphroditeClassB),
    isRequirementMet && 'w-50-l' // isRequirementMet === false in this example
  )}
/>
```

Output:

```jsx
<div class="flex items-center w-100 dynamic_aphrodite_class"></div>
```

## Best Practices

#### Avoid Inline Styling

Sometimes inline styling is the best option for what you're trying to accomplish, but we recommend against using it when you can. Since you cannot use certain types of CSS with inline styling (media queries, pseudo selectors, etc.), you end up creating yet another place that CSS needs to be tracked in your code. Ultimately, inline styling is fully supported, so do what works best for you.

#### Avoid important tags

In order to make a site Google AMP complaint, [you are unable to use `!important` qualifiers in your CSS](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/style_pages/).
