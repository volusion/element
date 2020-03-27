---
title: 'Rollback A Block Change'
metaTitle: 'Rollback A Block Change'
metaDescription: 'This how-to guide will help you if you published a minor change in Element, but want to roll it back.'
---

This how-to guide will help you if you published a minor change, but want to roll it back (major changes cannot be rolled back).

We will assume that you released a change that was not supposed to reach production yet, like this:

```sh
element release -n "a release"
```

## 1. Checkout Your Repo to the Previous Minor Release Commit (Optional)

As we recommended in "[Track Block Versions](/how-to/track-block-versions)," it is a good practice to commit every time
you release a version. The first step is to locate the last commit you released and checkout your repo to use that commit:

```sh
git checkout latest_released_commit
```

## 2. Issue the Rollback Command

Next, you can run the element command to rollback:

```sh
element rollback
```

At this point, your block users will get the previously-released version, and the version you rolled back is removed from the server.

If you had multiple minor releases linked to the major release, every `rollback` command will jump back one release until reaching the major.
The major version cannot be rolled back.

## 3. Fix the Error That Generated The Rollback (Optional)

If you want to fix the issue, simply fix it and release again if needed. Remember to commit the new release.

```sh
npm run build
element release -n "release notes"
git commit -am "new release"
```
