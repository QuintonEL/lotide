const tail = function(array) {
  let rest = [];
  if (array.length <= 1) {
    return rest;
  }
  rest = array.slice(1);
  return rest;
};

module.exports = tail;
