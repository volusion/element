---
title: "Release A Minor Block Change"
---

In this how-to guide, you'll learn how to identify whether changes made to a specific block are non-breaking or not, and if they are non-breaking, how to release those changes to your block users.

## Prerequisites

This guide assumes that you already have a published block that you are modifying. If you don't have a published block yet, check out the [tutorial for building an element page](/tutorials/building-an-element-page), which covers creating and publishing blocks.

## 1. Ensure That Your Changes Are Actually Non-Breaking

You need to be certain that the changes you're making to your block are actually non-breaking, because releasing breaking changes using this method can introduce errors for your block users and cause them to lose some (or all) of the data in their block configs.

### How Can You Tell?

Look at this chart and determine what kind of changes you're making. If any of them are breaking changes, consider either only making the non-breaking changes, or [releasing the changes as an opt-in new version of your block](/how-to/release-a-new-major-block-version).

| Breaking Changes                 | Non-Breaking Changes                        |
| -------------------------------- | ------------------------------------------- |
| Change the look of the block     | Change data processing                      |
| Change the block's config schema | Refactor code but functionality is the same |
|                                  | SEO optimizations                           |
|                                  | Bug fixes                                   |

## 2. Verify Your Changes in Staging

Assuming that your changes are in fact non-breaking, you should release them to staging so that you can verify that they work as intended, without affecting any of your block users. To do that, go to your terminal and navigate to your block's home directory. Then type these commands:

```shell
npm run build
element update
```

Your changes will now be available for you (and anyone in your development org) to see in Site Designer and via the Site Designer *Preview* link. Manually test them in a theme and verify that they are ready to release to your block users. If your changes are not ready yet, re-run `npm run build` and `element update` again every time that you alter the block code, and test again.

## 3. Create a Minor Release

When your changes are ready, you can release them by publishing a minor release. Minor releases will instantly propagate to your block users: they don't need to take any action to receive the update in their blocks. In your terminal, run this command:

```shell
element release -n "A minor release"
```

It's also a good time to tag the release with a commit. To do so, run this command in your terminal:

```shell
git commit -am "A minor release"
```

Your block changes are now available to your block users.

## Further Reading

See the [guide for how to keep track of your block versions](/how-to/track-block-versions) for more advice about releases.

See the [Element CLI reference](/references/element-cli) for more details about Element CLI commands.