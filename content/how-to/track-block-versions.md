---
title: 'Track Block Versions'
---

In this how-to guide we will explore how to keep track of block versions to maintain and organize your block's code. We will assume that you are already
developing a block locally and want to publish your block for the first time.

An explanation about [Block Versions](/explanations/block-versions) is a recommended read.

## 1. Initialize a Git Repository with Your Block Code

If you haven't already, we really recommend you keep your code organized using `git`. It's as easy as running:

```bash
git init
```

## 2. Publish Your Block for the First Time

It's time to test your work online, both in the Site Designer and on a live domain. To do that, let's publish the block:

```bash
npm run build
element publish -n "My Block Name"
```

## 3. Use and Test Your Block Online

Go to the Site Designer and install your block in one of your pages. Play with it, test the configuration and see how it looks in the preview domain.

## 4. Keep Developing

Every time you want to test your changes online, just run:

```bash
npm run build
element update
```

This will push the code updates online. The block is still in staging mode.

## 5. Create Your First Major Release

You are ready to make your first major release.

```bash
npm run build
element update
element release -n "Release note"
```

The release note is optional.

Here it is a good moment to commit the change to git.

```
git commit -am "First major release"
```

Additionally, it is recommended that you create a git tag to record the release:

```bash
git tag 1.0
```

## 6. Create a Minor Release

Once you have published your first major release, you can publish as many minor releases as you want. The minor release are linked to your major release.

```bash
element update
```

Remember that every time you issue an update with `element update` a staging version is created, so your block users won't be affected by your changes.

## 7. Release the Minor Version

Once your change is ready to reach your users, just release it. It is also a good moment to tag the release with a commit.

```bash
npm run build
element update
element release -n "A minor release"
git commit -am "A minor release"

#Optional but recommended
git tag 1.1
```

## 8. Rolling Back a Minor Release (When Needed)

If you published a minor change and for some reason want to roll it back, you can also do it.

```
element rollback
```

If you had multiple minor releases linked to the major release, every `rollback` command will jump back one release until reaching the major. The major version
cannot be rolled back.

Every time you run it, remember to point your repo to the right commit or tag to have the same code locally and in the Element servers.

```bash
git checkout "commit_id_of_previous_minor_release"
# Or if you used tags:
git checkout 1.0
```

## 9. Creating a New Major Version

Sometimes you will need to publish a new version of your block, with a new feature, breaking changes, or something that diverges a bit from the original one.

```
element publish -m
```

**Tip:** Before running the command, remember to tag your current block version with `git tag`.

The `-m` versions stands for `major`. The block will be published to the servers with the new version but not yet released. You can repeat steps
3 to 8 as needed for the new version.

If you need to release changes for different block versions (i.e. bug fixes), just change to the appropriate tag:

```bash
git branch support/v1 1.0
# Or
git checkout -b support/v1 1.0
```
