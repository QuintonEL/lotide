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

const without = function(source, itemsToRemove) {
  let newArr = source;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i,1);
      }
    }
  }
  return newArr;
};


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]