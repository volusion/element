---
title: 'How to Add a Page That Depends on URI Parameters'
---

## 1. Figure Out What Block(s) you Will Use

You need at least one block that reads the pageVar from the URI. This can be an existing block, such as Related Products, or a block that you created yourself and set up to use the pageVar. If you want to use your own block, see the guide for [How to Read Page URI Parameters from Your Blocks](/how-to/read-page-uri-parameters-in-blocks).

## 2. Start Creating a New Page

Add a page to your theme in Site Designer. For a full guide, see [How to Add a Page to a Theme](/how-to/add-page-to-theme). You'll probably follow these steps:

1. Navigate to Site Designer. If you are not already editing your theme, click the **edit** (or **continue editing**) button to open your theme.
2. Open the pages dropdown. By default it will say "Page: Home". Select the "Add a Page" option at the bottom.
3. Fill out the Page Title field.

## 3. Configure the Page Path Using :pageUrlText

- The page path must start with a `/`
- The page path should end with `/:pageUrlText`
- Example: `/special-features/:pageUrlText`

Here are some tips:

- Use hyphens to separate words
- Use lowercase letters
- Keep the path short and related to the content

Your block will get the value in the store's actual page URI, not `:pageUrlText`, so make sure you configure your block to handle the actual URI value.

For example, for a URI with `/special-features/modern-teapot`, your block would receive the value `modern-teapot`.

See [How to Read Page URI Parameters from Your Blocks](/how-to/read-page-uri-parameters-in-blocks) for more details.

## 4. Finish Creating the Page

Skip the SEO fields for now.

Press the "Done" button at the bottom of the form.

## 5. Add Your Block(s) to the Page

After creating the page, Site Designer will load your new page for you to edit. The page body will not have any blocks yet.

1. Click the plus icon button, which will open the Add a Block menu
2. Select a block category from the Add a Block menu
3. Choose your URI-param-reading block to add, then click the Add Block button.

Repeat for all blocks you want to add to the page.

## 6. Linking to Your Page

Now that you've created your page, you need to link to it.

1. Hard code a link to a specific resource, for example if you are buying advertising that will link to an article about a specific product, it might look something like this: `/product-article/desk-lamp`
2. Build a block that builds links dynamically using data from the [Volusion API that you get through ElementSdk](/references/sdk).
