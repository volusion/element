---
title: 'Element CLI Reference'
---

This reference looks at the [Element CLI](https://github.com/volusion/element-cli) commands and their options in detail. To learn more about using Element CLI, read [How to Keep Track of Your Block Versions](/how-to/track-block-versions).

## Table of Contents

- [Installing](#installing-element-cli)
- [Login](#login)
- [New Block](#new-block)
- [Publish](#publish)
- [Update](#update)
- [Rollback](#rollback)
- [Release](#release)

## Installing Element CLI

To install Element CLI, run this command in your terminal:

```shell
npm install -g @volusion/element-cli
```

## Commands

### Login

Prompts you to give your username and password. Use the same credentials that you use to log in to [Volusion Admin](https://www.volusion.com/login).

#### Login Usage

```shell
element login
```

### New Block

Creates a new starter block with the given block name.

#### New Block Usage

```shell
element new BlockName
```

### Publish

Publishes a block to the Block Theme Registry for use on Element stores and in the Site Designer. You will get a warning if your block does not include a thumbnail.png image in its root directory. The image should be 300 pixels wide, and not taller than a 3:2 aspect ratio.

#### Publish Usage

```shell
element publish -n Name
```

#### Publish Options

- **[-n, --name NAME]** this is a required option. The provided name will appear in Site Designer when adding your block to a theme.
- **[-c, --category CATEGORY]** Element CLI will provide an interface prompting you with categories to choose from, feel free to leave this option off.
- **[-m, --major-version]** see [How to Keep Track of Your Block Versions](/how-to/track-block-versions) for details on when to publish a new major version.

### Update

Updates your existing block in the Block Theme Registry.

#### Update Usage

```shell
element update
```

#### Update Options

- **[-p, --toggle-public]** if your agency has permission to change this, it will allow you to make the block available to users outside of our organization.
- **[-u, --unminified]** unminified is an option for skipping the minification process, useful for debugging.

### Rollback

Rollback your existing block to a previous released version in the Block Theme Registry. If you had multiple minor releases linked to the major release, every rollback command will jump back one release until reaching the major. The major version cannot be rolled back.

#### Rollback Usage

```shell
element rollback
```

#### Rollback Options

No options.

### Release

Releases your existing block and pushes it live to the public. Note that people outside of your organization will not be able to see it until it has been updated and toggled to public. You may not have permission to do this yourself.

#### Release Usage

```shell
element release
```

#### Release Options

- **[-n, --note]** a release note viewable in Site Designer, which displays the note from the major release, or the most recent minor release.
