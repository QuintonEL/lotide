const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4] for [1, [2, 3], 4]", () => {
    assert.deepEqual(flatten([1, [2, 3], 4]), [1, 2, 3, 4]);
  });

  it("returns [6, 7, 8, 9, 0] for [[6], 7, 8, [9], 0]", () => {
    assert.deepEqual(flatten([[6], 7, 8, [9], 0]), [6, 7, 8, 9, 0]); 
  });
});