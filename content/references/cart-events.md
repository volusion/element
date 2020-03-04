---
title: 'Cart Events'
---

The Element SDK provides topic names for standard cart events. Blocks can subscribe to these topics, as well as publishing to them, using PubSubJS.

## Table of Contents

- [Event Definitions](#eventdefinitions)
- [addToCart](#addToCart) - publish to add an item to the cart
- [itemAddedToCart](#itemAddedToCart) - subscribe to get info about an item added to the cart
- [itemRemovedFromCart](#itemRemovedFromCart) - subscribe to get info about an item removed from the cart
- [openAccountPanel](#openAccountPanel) - publish to open the account panel
- [openCart](#openCart) - publish to open the cart panel
- [updateCartCount](#updateCartCount) - subscribe to get the updated cart quantity
- [Additional Reading](#additional-reading)

### Event Definitions

`this.props.events.cart`, available within block component definitions, is defined as follows:

```javascript
{
    addToCart: "cart.addToCart",
    itemAddedToCart: "cart.itemAddedToCart",
    itemRemovedFromCart: "cart.itemRemovedFromCart",
    openAccountPanel: "cart.openAccountPanel",
    openCart: "cart.openCart",
    updateCartCount: "cart.updateCartCount",
}
```

Subscriptions using these topics should be referenced as properties of `this.props.events.cart`, not as strings. This is because these topic names are provided by Element SDK and could be subject to change. By using the property values from `this.props.events.cart`, you are guaranteed to have a valid topic name. Using the string is not as safe.

For example, use `this.props.events.cart.addToCart`, not `"cart.addToCart"`.

## Events

### 'addToCart'

The cart subscribes to the `addToCart` event. You can publish it from your own blocks to add items to the cart.

#### 'addToCart' Usage

When publishing an `addToCart` event, you must provide an object as the second argument of the `publish` function with the following properties:

```javascript
this.props.pubSub.publish(this.props.events.cart.addToCart, {
  productId, // type: string, from product data
  quantity, // type: int, whatever quantity you want to add to the cart, ex: 1
  variantId, // type: string, from product data
  itemPrice, // type: float, from product data, ex: 4.99
})
```

### 'itemAddedToCart'

The cart publishes this event after the shopper adds an item to the cart. Your blocks can subscribe to it to see information about the item that the shopper added.

#### 'itemAddedToCart' Usage

```javascript
// subscribe to the event
this.props.pubSub.subscribe(
  this.props.events.cart.itemAddedToCart,
  this.handleItemAdded
)

// define a handler function to receive the data
handleItemAdded = (msg, data) => {
  // use msg and data here
}
```

The `data` provided by `itemAddedToCart` has the following shape:

```javascript
{
  id, // string, the id of the product
    images, // array of objects, containing image data for the product
    name, // string, the product name
    price, // float, the product price, ex: 4.99
    quantity // int, the quantity of items added to the cart in the triggering action
}
```

### 'itemRemovedFromCart'

The cart publishes this event after the shopper removes an item from the cart. Your blocks can subscribe to it to see information about the item that the shopper removed.

#### 'itemRemovedFromCart Usage'

```javascript
// subscribe to the event
this.props.pubSub.subscribe(
  this.props.events.cart.itemRemovedFromCart,
  this.handleItemRemoved
)

// define a handler function to receive the data
handleItemRemoved = (msg, data) => {
  // use msg and data here
}
```

The `data` provided by `itemRemovedFromCart` has the following shape:

```javascript
{
  id, // string, the id of the product
    images, // array of objects, containing image data for the product
    name, // string, the product name
    price, // float, the product price, ex: 4.99
    quantity // int, the quantity of items removed from the cart in the triggering action
}
```

### 'openAccountPanel'

The cart block subscribes to this event and your blocks can publish the event to open the account panel.

#### 'openAccountPanel' Usage

No data is necessary when publishing this event.

```javascript
this.props.pubSub.publish(this.props.events.cart.openAccountPanel)
```

### 'openCart'

The cart block subscribes to this event and your blocks can publish the event to open the cart panel.

#### 'openCart' Usage

No data is necessary when publishing this event.

```javascript
this.props.pubSub.publish(this.props.events.cart.openCart)
```

### 'updateCartCount'

The cart publishes this event after the shopper updates the count of total items in the cart. Your blocks can subscribe to it to see the new quantity of items in the cart.

#### 'updateCartCount' Usage

```javascript
// subscribe to the event
this.props.pubSub.subscribe(
  this.props.events.cart.updateCartCount,
  this.handleUpdatedCartCount
)

// define a handler function to receive the data
handleUpdatedCartCount = (msg, count) => {
  // use msg and count here, count is an int
}
```

### Additional Reading

For more details on PubSubJS, see the [PubSubJS npm reference](https://www.npmjs.com/package/pubsub-js).

For more information about how to communicate between blocks using PubSubJS, see the guide for [How to Communicate between Two (Or More) Blocks](/how-to/communicate-between-blocks)
