const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️' + `   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log('🔴 🔴 🔴' + `   Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(object, value) {
  for (let type of Object.keys(object)) {
    if (object[type] === value) {
      return type;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);