const head = function(array) {
  let first = array[0];
  if (array.length <= 0) {
    return 'undefined';
  }
  return first;
}

module.exports = head;