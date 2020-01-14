const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(([1, 2, 3]), [1, 2, 3]), true);
  });

  it("returns false for [5, 2] for [5]", () => {
    assert.strictEqual(assertArraysEqual(([5, 2]), [5]), false); 
  });
});