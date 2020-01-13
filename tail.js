// returns array without the first entry
const tail = function(array) {
  let rest = [];
  if (array.length <= 1) {
    return rest;
  } else {
    rest = array.slice(1);
    return rest;
  }
};

module.exports = tail;
