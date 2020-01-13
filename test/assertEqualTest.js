const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true for hello and hello", () => {
    assert.strictEqual(assertEqual('hello', 'hello'), true);
  });

  it("returns false for 2 and 3", () => {
    assert.strictEqual(assertEqual(1, 2), false); 
  });
});