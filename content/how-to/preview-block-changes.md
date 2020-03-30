---
title: 'Preview Block Changes'
metaTitle: 'Preview Block Changes'
metaDescription: 'This how-to guide will help you learn how to preview changes made to your block in Element.'
---

## 1. Make Changes to Your Block

Make the code changes to your block that you'd like to test.

## 2. Build Your Block

Use your terminal to navigate to the home directory of your block. You'll know it's the correct directory because you'll see a `.element-block` file there.

Run this command in your terminal:

```shell
npm run build
```

If you encounter any errors executing this command, you must fix the errors before proceeding.

## 3. Update Your Block

Run this command in your terminal:

```shell
element update
```

If the command is successful, you'll see output like this:

```shell
            Updated Myblock v1 for staging
            ID 235840673211303883
```

## 4. Open Site Designer

Log in to [volusion.com](https://www.volusion.com/login) and navigate to [Site Designer](https://admin.volusion.com/designer).

## 5. Ensure That You Are Using the Staging Version of the Block in Your Theme

1. Edit the theme that contains the block you are testing, or edit one of your themes and add the block to it.
2. Hover your mouse over the block in your theme and click the **Edit** button that appears.
3. Open the block version dropdown by clicking the **gear icon**, and ensure that you have the _Staging_ version of your block selected.

## 6. Preview Your Theme

From Site Designer, click the **Preview** button to preview your theme.

## 7. Test Your Block in the Browser

Your changes are live for you to observe and test, but are not released to your block users.

## 8. Repeat the Process to Test More Changes

Repeat steps 1 (Make Changes to Your Block), 2 (Build Your Block), and 3 (Update Your Block) to update your block in _Staging_.

Then, test your changes and make more changes if necessary.

## 9. Release Your Changes to Your Block Users

When you are ready, you can return to your terminal and run this command to release your changes to your block users:

```shell
element release
```

**Note:** Releasing will affect your block users.

## Further Reading

- [Track Block Versions](/how-to/track-block-versions)
- [Block Versions](/explanations/block-versions)
- [Element CLI](/references/element-cli)
