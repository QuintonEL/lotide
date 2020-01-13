const middle = function(array) {
  let length = array.length;
  let midIndex = Math.floor(length / 2);
  let finalMiddle = [];
  // array with less than 2 elements
  if (length <= 2) {
    return finalMiddle;
    // array with odd number of elements
  } else if (length % 2 !== 0) {
    let mid = array[midIndex];
    finalMiddle.push(mid);
    return finalMiddle;
    // array with even number of elements
  } else if (length % 2 === 0) {
    let mid = array[midIndex];
    let otherMid = array[midIndex - 1];
    finalMiddle.push(otherMid);
    finalMiddle.push(mid);
    return finalMiddle;
  }
};

module.exports = middle;
