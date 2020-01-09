const assertArraysEqual = function(first, second) {
  let status = eqArrays(first, second);
  if (status) {
    console.log('✔️ ✔️ ✔️' + `  Assertion Passed: ${first} === ${second}`);
  } else {
    console.log('🔴 🔴 🔴' + `  Assertion Failed: ${first} !=== ${second}`);
  }
};

const eqArrays = function(first, second) {
  // check that the arrays have matching length
  if (first.length !== second.length) {
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// test case
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);