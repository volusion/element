---
title: 'Release A New Major Block Version'
metaTitle: 'Release A New Major Block Version'
metaDescription: 'This how-to guide will teach you how to release a new major (opt-in) version of your block that your block users will need to manually upgrade to.'
---

In this how-to guide, you'll learn how to release a new major (opt-in) version of your block that your block users will need to manually upgrade to. This is often necessary when you are introducing breaking changes to your block, such as changes to the block appearance or config schema. You can also [release non-breaking block changes that automatically propagate to all your block users](/how-to/release-a-minor-block-change).

## Prerequisites

This guide assumes that you already have a published block that you are modifying. If you don't have a published block yet, see "[Building an Element Page Tutorial](/tutorials/building-an-element-page)," which covers creating and publishing blocks.

## 1. Create a New Major Version of Your Block

For opt-in or breaking changes, you'll want a new version branch to do your work in. Go to your terminal and navigate to your block's home directory, then type this command to create a new major version for your block:

```shell
element publish -m
```

## 2. Make Your Block Changes

Make the code changes for your block.

## 3. Verify Your Changes in Staging

Once you have made the changes in your block, you should release them to staging so you can verify that the block works as intended. To do that, return to your terminal from earlier with the block’s home directory, then type these commands:

```shell
npm run build
element update
```

Your changes will now be available for you (and anyone in your development org) to see in Site Designer and via the Site Designer Preview link. Manually test them in a theme and verify that they are ready to release to your block users. If your changes are not ready yet, re-run `npm run build` and `element update` again every time you alter the block code, and then test again.

## 4. Release Your New Version

When your changes are ready, you can make them available in Site Designer by publishing a release. New major releases will instantly be available for your block users to manually upgrade, but they must take manual action to do so. In your terminal, run this command:

```shell
element release -n "Release note"
```

It's also a good time to tag the release with a commit. To do so, run this command in your terminal:

```shell
git commit -am "Released a new major version"
```

Your new major block version will be available to upgrade in Site Designer on a per-block basis. Anytime the block is added to a theme from now on, it will automatically use the latest version. Each placement of the block will need to be upgraded (unless it's a [reusable block](/how-to/reuse-a-block-across-pages)).

### Switching Your Block to the New Version in Site Designer

To upgrade a block in Site Designer to a new major version, do the following:

1. View a page that shows the block.
2. Begin editing the block to open its edit panel.
3. Click the gear icon in the panel and select a new block version, or
4. Click the callout that says that there's a new block version available.

## Further Reading

See [Track Block Versions](/how-to/track-block-versions)" for more advice about releases.

See the "[Element CLI](/references/element-cli)" reference for more details about Element CLI commands.
