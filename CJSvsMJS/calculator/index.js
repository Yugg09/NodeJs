const add = require('./add');
const mul = require('./mul');

module.exports = {add,mul};

// we imported all function in a single file and then we exported it as an object. so that we can import it in a single line in our first.js file.