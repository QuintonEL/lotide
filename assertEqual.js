// checks if two inputs are exactly equal and returns a boolean result
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;  
  }
};

module.exports = assertEqual;