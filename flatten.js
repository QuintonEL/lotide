const eqArrays = function(first, second) {
  // check that the arrays have matching length
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(first, second) {
  let status = eqArrays(first, second);
  if (status) {
    console.log('✔️ ✔️ ✔️' + `  Assertion Passed: ${first} === ${second}`);
  } else {
    console.log('🔴 🔴 🔴' + `  Assertion Failed: ${first} !=== ${second}`);
  }
};

const flatten = function(arrays) {
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      for (let j = 0; j < arrays[i].length; j++) {
        newArray.push(arrays[i][j]);
      }
    } else {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
};

