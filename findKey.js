const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️' + `   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log('🔴 🔴 🔴' + `   Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = function(object, callback) {
  for (let name of Object.keys(object)) {
    // if callback is true, return the key
    if (callback(object[name])) {
      console.log(name);
      return name;
    }
  }
  // if no keys are found
  console.log(undefined);
  return undefined;
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

// test case
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma')