---
title: 'Interact with the Cart'
metaTitle: 'Interact with the Cart'
metaDescription: 'This how-to guide explains how to make your custom blocks interact with the cart in Element.'
---

Some of your custom blocks may need to interact with the cart—for example, if you wanted to add an item to the cart from your block, or trigger an action in your block after a shopper adds an item to the cart. You can do this with the included PubSubJS mechanism.

## 1. Listening for a Cart Event

If you want your block to respond to changes in the cart, you should set up your block to listen for a cart event using PubSubJS.

### Add a Subscription in Your Block's componentDidMount Function

Locate the `componentDidMount` function of one of your blocks. If this function doesn't exist yet, add it to your component. You may need to refactor the block to use class syntax. Then add a subscription:

```javascript
componentDidMount() {
    this.props.pubSub.subscribe(
        this.props.events.cart.itemAddedToCart, // must match one of the cart events
        this.handleItemAdded
    );
}
```

`utils.pubSub.subscribe()` takes two arguments:

1. A topic name, which should be one of the [Cart Events](/references/cart-events).
2. A handler function—the message will be passed to the handler function.

### Implement Your Handler Function for the Subscription

Your handler function is the code that actually does something with the data received from the cart event. Add it to your block component as an instance property.

```javascript
// inside the body of your component
handleItemAdded = (msg, itemData) => {
  // do something with itemData. In this example we will set it to state.
  this.setState({ itemAdded: itemData })
}
```

## 2. Publishing an Event to the Cart

Your block may want to publish an event to the cart. This can allow you to add an item, update an item count, or open the cart panel. In this example, we'll add an item to the cart.

### Add a Function to Send Your Message

Send your message using `utils.pubSub.publish()` in your block. This function takes two arguments:

1. A topic name, which should be one of the [Cart Events](/references/cart-events). The cart block will listen for this topic.
2. A data value (any type)—this is the piece of data you will send to the cart.

Example:

```javascript
// in your block component body, add a function. Here we're doing it as an instance property because this component is a class.
addItem = itemData => {
  this.props.pubSub.publish(this.props.events.cart.addToCart, itemData)
}
```

**Note:** If your component is a stateless functional component rather than an ES6 class, you would define your function as a const rather than an instance property.

In this example, the cart block expects `itemData` to be an object with the following properties:

```javascript
{
  productId, quantity, variantId, itemPrice
}
```

## Further Reading

To get a sense of what cart interactions are possible, see "[Cart Events](/references/cart-events)."

For more details on PubSubJS, see the [PubSubJS npm reference](https://www.npmjs.com/package/pubsub-js).
