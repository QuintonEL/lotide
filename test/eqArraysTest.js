const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [4, 5, 6] and [4, 5, 6]", () => {
    assert.strictEqual(eqArrays([4, 5, 6], [4, 5, 6]), true);
  });

  it("returns false for [1, 2] and [1]", () => {
    assert.strictEqual(eqArrays([1, 2], [1]), false); 
  });

  it("returns false for [1, 2] and [7, 8]", () => {
    assert.strictEqual(eqArrays([1, 2], [7, 8]), false); 
  });
});