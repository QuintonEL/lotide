const eqObjects = function(object1, object2) {
  // check the lengths of the objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      // if they are both arrays go compare
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        eqArrays(object1[key], object2[key]);
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        // if the values are different
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let status = eqObjects(actual, expected);
  if (status === true) {
    console.log('✔️ ✔️ ✔️' + `   Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log('🔴 🔴 🔴' + `   Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
let obj1 = {a: '1', b: 2};
let obj2 = {b: 2, a: '1'};
assertObjectsEqual(obj1, obj2);