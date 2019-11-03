const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
    console.log('IM About to run a Query');

    const key = Object.assign({}, this.getQuery(), {
        collection: this.mongooseCollection.name
    });
    console.log('Key => ', key);
    return exec.apply(this, arguments);
}