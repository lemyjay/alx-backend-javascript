// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 6 when inputs are 1.5 and 3.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return -2 when inputs are 1.5 and 3.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return 1.5 when inputs are 2.5 and 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2), 1.5);
    });
    it('should return "Error" when divisor is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
