const assert = require('chai').assert;
const expect = require('chai').expect;

/**
 *  Dummy test to validate Mocha configuration
 */
describe('DummyTests', function () {
  describe('Multiplication', function () {
    it('should equal 15 when 5 is multiplied by 3', function () {
      const result = 5 * 3;
      assert.equal(result, 15);
    });
  });

  describe('Validation', function () {
    it('should return true if the number is greater than 10', function () {
      const number = 11;
      let result;
      if (number > 10) {
        result = true;
      } else {
        result = false;
      }
      expect(result).to.be.true;
    });
  });
});
