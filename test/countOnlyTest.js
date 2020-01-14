const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it(`returns {'jason': 1, 'salima': 2} for ['jason', 'salima', 'salima'] and {'jason': true, 'salima': true}`, () => {
    assert.deepEqual(countOnly(['jason', 'salima', 'salima'], {'jason': true, 'salima': true}), {'jason': 1, 'salima': 2});
  });

  it(`returns {'steve': 1} for ['steve', 'john'] and {'steve': true, 'john': false}`, () => {
    assert.deepEqual(countOnly(['steve', 'john'], {'steve': true, 'john': false}), {'steve': 1}); 
  });
});