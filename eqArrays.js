const eqArrays = function(first, second) {
  // check that the arrays have matching length
  if (first.length !== second.length) {
    return false;
  };
  for (let i = 0; i < first.length; i++) {
    // if any elements are not the same
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

