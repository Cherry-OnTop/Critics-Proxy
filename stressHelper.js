'use strict';

module.exports = {
    generateRandomData
}

function generateRandomData(context, events, done) {
    const listing = parseInt(Math.floor(Math.random() * 10000000) + 1);
    context.vars.listing = listing;
    return done();
}