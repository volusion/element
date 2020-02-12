---
title: 'Block Utils'
---

Blocks have access to the following utils, passed to them as props. Some are only available when the block is initially rendered by the server, and not available later on the client-side.

In `Block.js` these methods are avaible via `props`, for example: `props.seo.setTitle()`. In `getDataProps` they are passed as part of `utils`, which is how we will reference them in this document.

## Table of Contents

- **Server Side Only**
  - [addAmpScript](#addampscript)
  - [addLink](#addlink)
  - [addScript](#addscript)
  - [isAmpRequest](#isamprequest)
  - [isRendering](#isrendering)
  - [throwNotFound](#thrownotfound)
- **Server and Client Side**
  - [canonicalUrl](#canonicalurl)
  - [client](#client)
  - [events](#events)
  - [pubSub](#pubsub)
  - [queryParams](#queryparams)
  - [seo](#seo)

## Server Side Only

### 'addAmpScript'

Function that loads a script from The AMP Component Catalogue. Currently restricted to the following: [amp-analytics](https://amp.dev/documentation/components/amp-analytics/?format=websites), [amp-bind](https://amp.dev/documentation/components/amp-bind/?format=websites), and [amp-form](https://amp.dev/documentation/components/amp-form/?format=websites).

### 'addAmpScript' Usage

```javascript
utils.addAmpScript('amp-bind')
```

#### 'addAmpScript' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'addLink'

Function that adds a link to an external style sheet.

#### 'addLink' Usage

```javascript
utils.addLink('https://your-style-sheet.css')
```

#### 'addLink' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'addScript'

Function that includes an external javascript library.

#### 'addScript' Usage

```javascript
utils.addScript(
  'https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js',
  false, // optional boolean: include the defer attribute
  false // optional boolean:  include the async attribute
)
```

#### 'addScript' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'isAmpRequest'

Boolean property signifying whether the current request is an AMP request. `isAmpRequest` is true on AMP pages, and `undefined` otherwise.

#### 'isAmpRequest' Usage

```javascript
if (utils.isAmpRequest) {
  // do something AMP related, such as adding an AMP Script
}
```

#### 'isAmpRequest' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'isRendering'

Boolean property that is `true` when the block is rendered by the live store, or a preview of a theme, and `undefined` otherwise, for instance in Site Designer or when developing locally.

#### 'isRendering' Usage

```javascript
if (utils.isRendering) {
  // do something that you don't want to happen while someone is editing their theme in Site Designer
}
```

#### 'isRendering' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &cross;     |

**Note:** `isRendering` can be passed to block props by returning it with the `getDataProps` function. Example:

```javascript
export getDataProps({ isRendering }, props) => Promise.resolve({ isRendering });
```

### 'throwNotFound'

Function that takes the visitor to Page Not Found.

#### 'throwNotFound' Usage

```javascript
const isRendering = utils.isRendering

return getSampleData()
  .then(data => {
    return data
  })
  .catch(() => {
    if (isRendering) utils.throwNotFound()
    return {
      isRendering,
    }
  })
```

#### 'throwNotFound' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &cross;     |

## Server and Client Side

### 'canonicalUrl'

Function that accepts an object and returns a string with the URL of the current page and the passed object as URI parameters. The object passed is also returned as `queryParams` on the page when clicking on the generated link. `canonicalUrl` is generally utilized in conjunction with `isAmpRequest`.

#### 'canonicalUrl' Usage

```javascriptx
<a href={utils.canonicalUrl({ openPushMenu: true })}>
```

#### 'canonicalUrl' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'client'

Library that gives you access to the Volusion API. See [Volusion API ElementSdk Client Reference](/references/sdk)

#### 'client' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'events'

Topic names for pubSub events that are available to all blocks. See [Cart Events](/references/cart-events).

#### 'events' Usage

```javascript
utils.pubSub.subscribe(utils.events.cart.itemAddedToCart, this.handleItemAdded)
```

#### 'events' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'pubSub'

An instance of PubSubJS. See [How to Communicate between Two (Or More) Blocks](/how-to/communicate-between-blocks).

#### 'pubSub' Usage

```javascript
utils.pubSub.publish(utils.events.cart.openCart)
```

#### 'pubSub' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &check;     |

### 'queryParams'

Object with the query params from the page URI. See [How to Read Page URI Parameters from Your Blocks](/how-to/read-page-uri-parameters-in-blocks#more-data-from-the-uri-read-query-params-from-block-props).

#### 'queryParams' Usage

```javascript
const { queryParams = {} } = props
const page = Number(queryParams.page) || 1
```

#### 'queryParams' Availability

| getDataProps | Block props |
| ------------ | ----------- |
| &check;      | &check;     |

**Note:** when accessing `queryParams` from getDataProps they are available under props, not utils.

### 'seo'

Library that allows a block to manipulate the SEO related tags and title in the head of the page. See [How to set SEO data from a block](/how-to/set-seo-data-from-a-block).

#### 'seo' Usage

```javascript
utils.seo.setTitle('Your Page Title')
utils.seo.setDescription('Your Page Description')
utils.seo.addExtraTag('twitter:title', 'Your Page Title')
```

#### 'seo' Availability

| getDataProps utils | Block props |
| ------------------ | ----------- |
| &check;            | &cross;     |
