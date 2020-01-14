const flatten = function(arrays) {
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      for (let j = 0; j < arrays[i].length; j++) {
        newArray.push(arrays[i][j]);
      }
    } else {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
};

module.exports = flatten;