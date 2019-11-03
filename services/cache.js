const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
    console.log('IM About to run a Query');

    const key = Object.assign({}, this.getQuery(), {
        collection: this.mongooseCollection.name
    });
    console.log('Key => ', key);
    return exec.apply(this, arguments);
}