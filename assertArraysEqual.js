const eqArrays = require('./eqArrays');

// return the boolean result from the eqArrays function
const assertArraysEqual = function(first, second) {
  let status = eqArrays(first, second);
  return status;
};

module.exports = assertArraysEqual;