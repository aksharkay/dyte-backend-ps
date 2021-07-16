"use strict";

const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

const broker = new ServiceBroker();

// Create a Mongoose service for `post` entities
broker.createService({
    name: "webhooks",
    mixins: [DbService],
    adapter: new MongoDBAdapter("mongodb://localhost/moleculer-demo"),
    collection: "urls"
});


broker.start()
// Create a new post
.then(() => broker.call("posts.create", {
    title: "My first post",
    content: "Lorem ipsum...",
    votes: 0
}))

// Get all posts
.then(() => broker.call("posts.find").then(console.log));