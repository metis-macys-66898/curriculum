/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, c = a) => {
   if (c <= 1) return 1; 
   if (a % c === 0 && b % c === 0) return c;
   return solution (a, b, c-1);
};

module.exports = {
  solution,
};
