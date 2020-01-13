const eqArrays = require('./eqArrays');

const assertArraysEqual = function(first, second) {
  let status = eqArrays(first, second);
  return status;
};

module.exports = assertArraysEqual;