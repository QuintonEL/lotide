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
    console.log('✔️ ✔️ ✔️' + 'Assertion Passed');
  } else {
    console.log('🔴 🔴 🔴' + 'Assertion Failed');
  }
};

assertArraysEqual([1,2,3],[1,2,3]);
