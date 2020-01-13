const eqArrays = require('./eqArrays');

const assertArraysEqual = function(first, second) {
  let status = eqArrays(first, second);
  if (status) {
    console.log('✔️ ✔️ ✔️' + '   Assertion Passed');
  } else {
    console.log('🔴 🔴 🔴' + '   Assertion Failed');
  }
};

module.exports = assertArraysEqual;