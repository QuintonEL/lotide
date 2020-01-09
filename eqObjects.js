const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️' + `   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log('🔴 🔴 🔴' + `   Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab,abc), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);