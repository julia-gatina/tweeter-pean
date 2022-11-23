const assert = require('assert');

/**
 *  Dummy test to validate Mocha configuration
 */
describe('DummyTest', function () {
  describe('Multiplication', function () {
    it('should equal 15 when 5 is multiplied by 3', function () {
      const result = 5 * 3;
      assert.equal(result, 15);
    });
  });
});
