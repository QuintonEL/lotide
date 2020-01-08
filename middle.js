const eqArrays = function(actual, expected) {
  // check that the arrays have matching length
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let status = eqArrays(actual, expected);
  if (status) {
    console.log('✔️ ✔️ ✔️' + `  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log('🔴 🔴 🔴' + `  Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const middle = function(array) {
  let length = array.length;
  let midIndex = Math.floor(length / 2);
  let finalMiddle = [];
  // array with less than 2 elements
  if (length <= 2) {
    return finalMiddle;
    // array with odd number of elements
  } else if (length % 2 !== 0) {
    let mid = array[midIndex];
    finalMiddle.push(mid);
    return finalMiddle;
    // array with even number of elements
  } else if (length % 2 === 0) {
    let mid = array[midIndex];
    let otherMid = array[midIndex - 1];
    finalMiddle.push(otherMid);
    finalMiddle.push(mid);
    return finalMiddle;
  }
};

assertArraysEqual(middle([1, 2 ,3 ,4]),[2, 3]);
