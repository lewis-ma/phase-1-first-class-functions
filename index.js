onst assert = require('assert');
const myFunction = require('../myFunction');

describe('myFunction', function() {
  it('should return the sum of two numbers', function() {
    assert.equal(myFunction(2, 3), 5);
  });

  it('should return NaN if either argument is not a number', function() {
    assert(isNaN(myFunction(2, 'hello')));
    assert(isNaN(myFunction('world', 3)));
    assert(isNaN(myFunction('hello', 'world')));
  });
});
