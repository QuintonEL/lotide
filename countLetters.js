const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️' + `   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log('🔴 🔴 🔴' + `   Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(string) {
  // create empty object
  let count = {};
  // remove spaces
  string = string.replace(/ /g, '');
  for (let pos of string) {
    if (count[pos]) {
      count[pos] += 1;
    } else {
      count[pos] = 1;
    }
  }
  return count;
};

let truth = countLetters('hello');
assertEqual(truth, truth);
countLetters('lighthouse in the house');