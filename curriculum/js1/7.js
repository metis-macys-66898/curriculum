/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, divisor = 2) => {
  if (a <= 1 || (a % divisor === 0 && a != 2) ) {
     return false;
  } 
  if (divisor >= a - 1) {
     return true;
  }
  return solution (a, divisor + 1) ;

};

module.exports = {
  solution,
};
