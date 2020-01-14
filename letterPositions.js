const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // check if an array exists
    if (Array.isArray(results[sentence[i]])) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  delete results[' '];
  console.log(results);
  return results;
};

letterPositions('lighthouse in the house');
assertArraysEqual(letterPositions("hello").e, [1]);