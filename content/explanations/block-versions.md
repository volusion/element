---
title: "Block Versions"
---

Blocks are the core concept of the Element platform. One benefit of blocks is that they can be reused over any number of sites. For example, if you operated 1,000 Element sites and reused a common block among all of them, updating that one block once would update all 1,000 sites in one operation. If the update was error free, everything would be fine; however, if that update caused a problem you now have that problem across all 1,000 sites. Therefore, a safe and effective release cycle is required for blocks. We discuss that release cycle next.

## Staging vs Production

During development, a block may be **unstaged**, **staged**, or **live**.

An **unstaged** block is one that is undergoing development on your local machine. The Element platform has no knowledge of unstaged blocks. Once you want to test your changes, you **publish** your block. Publishing a block packages, tests, and pushes your code to our platform. Element is aware of staged blocks. Staged blocks can be previewed by members of your organization. Once you're satisfied with your changes, you may **release** your block making it **live** to those outside of your organization (if so desired). Released blocks are visible by all themes using that block. When you **release** a change you have two options, releasing a major or minor version of the block code. We dicsuss releases and versions next.

## Minor vs Major Versions

A block can have multiple major versions. And inside each major version a block may have multiple minor releases. Element treats major releases as breaking changes and forces site-owners to opt-in to that change. Minor release are considered non-breaking and are autoamtically deployed to all sites utilizing that block. Let's look more closely at each use case.

- **Minor releases** are propagated automatically to all the users of your block. This is a convenient way of shipping bug fixes and new features that don't affect the block look and feel or the block configuration. The block users need to perform no action in order to get your updates.
- **Major releases** are not propagated automatically and users need to manually opt-in for the new block versions. Major releases are important to ship new features on a block that are not compatible or can potentially change the look and feel of current sites.

Major releases are tagged internally with ascending numbers, starting from one. Each new version will increment the current release number by one. For minor versions, there is no explicit numeric tagging, but it is a good practice to tag your minor releases using a git SHA or similar. For more details, see [how to keep track of your block versions](/how-to/track-block-versions).

For each release you can add a release note. Users of your block will be able to read the latest release note you add.