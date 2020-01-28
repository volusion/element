---
title: "Communicate Between Blocks"
---

Sometimes, it may be necessary for one block to send information to another block on the same page. In Element, blocks can communicate with each other via a pub-sub mechanism. This guide will explain how to send information between two (or more) blocks.

All blocks have access to an instance of PubSubJS as `this.props.pubSub`.

For more details on PubSubJS, see the [PubSubJS npm reference](https://www.npmjs.com/package/pubsub-js).

## 1. Identify the Blocks That Need to Communicate with Each Other

The first step of setting up block communication is figuring out which block will send messages (the sender), and which blocks will receive those messages (the receivers). In Element, some pre-made blocks already send messages to each other, and you can listen for those events in your blocks. See the [Cart Events Reference](/references/cart-events) for more info.

For this guide, you will be setting up **your own blocks** as senders and receivers of messages.

## 2. Add a Publish Action to Your Sender Block

Once you have identified which block will send messages to other blocks, you need to set up a publish action in that block's code.

### Add a Function to Send Your Message

For this guide, we'll use the example of sending a message between blocks when a user changed an option for a product they were viewing.

Send your message using `utils.pubSub.publish()` in your block. This function takes two arguments:

1. A topic name (string), which can be any value you like. Your other block(s) will listen for this topic.
2. A data value (any type). This is the piece of data you will send to your other block(s).

Example:

```javascript
// in your block component body, add a function. Here we're doing it as an instance property because this component is a class.
handleOptionChange = event => {
    const newOptionValue = event.target.value;
    this.props.pubSub.publish('myEvents_PRODUCT_OPTION_CHANGED', newOptionValue);
};
```

Note: if your component is a stateless functional component rather than an ES6 class, you would define your function as a const rather than an instance property.

### Prefix Your Topic Names!

It's always a good idea to add a unique prefix to topic names that you create, to ensure that you don't collide with any other existing topic names. This way, your events will all live in their own _namespace_. In this example, our topic is named `myEvents_PRODUCT_OPTION_CHANGED`, and `myEvents_` is the prefix we have chosen. You should choose something descriptive and unique.

### Call Your Function at the Appropriate Time

You can call your function from anywhere else in your block code. For this example, you would call `this.handleOptionChange` from the onChange event for a select element, like so:

```javascript
    <select onChange={this.handleOptionChange}>
```

## 3. Listen for Published Messages in Your Receiver Block(s)

At this point, you have a block that's sending messages, but you need to set up one or more blocks to listen for those messages.

### Add a Subscription in Your Block's componentDidMount Function

Locate the `componentDidMount` function of one of your receiver blocks. If this function doesn't exist yet, add it to your component. You may need to refactor the block to use class syntax. Then add a subscription:

```javascript
componentDidMount() {
    this.props.pubSub.subscribe(
        'myEvents_PRODUCT_OPTION_CHANGED', // must match the topic name EXACTLY
        this.onOptionChanged
    );
}
```

`utils.pubSub.subscribe()` takes two arguments:

1. A topic name (string), which can be any value that a sender block is publishing.
2. A handler function. The message will be passed to the handler function.

### Implement Your Handler Function for the Subscription

Your handler function is the code that actually does something with the data received from another block. Add it to your block component as an instance property.

```javascript
// inside the body of your component
onOptionChanged = (msg, newOptionValue) => {
    // do something with newOptionValue. In this example we will set it to state.
    this.setState({ productOption: newOptionValue });
};
```

Repeat this process for more receiver blocks, if necessary.

## Appendix: Listening for Existing Messages

To set up your blocks to listen for existing messages, see the [Cart Events Reference](/references/cart-events).