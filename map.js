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
const numbers = [1, 2, 3, 4, 5];
const bool = ['yes', 'yes', 0, 'yes', 'no'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// 1
const results1 = map(words, word => word[0]);
console.log(results1);

// 2
const results2 = map(numbers, num => num * 2);
console.log(results2);

// 3
const results3 = map(bool, boo => !boo);
console.log(results3);

// test case 1
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// test case 2
assertArraysEqual(results2, [ 2, 4, 6, 8, 10 ]);

// test case 3
assertArraysEqual(results3, [ false, false, true, false, false ]);
