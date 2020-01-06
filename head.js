const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️' + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log('🔴 🔴 🔴' + `Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(array) {
  let first = array[0];
  if (array.length <= 0) {
    return 'undefined';
  }
  return first;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");