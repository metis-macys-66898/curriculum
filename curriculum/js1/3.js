/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, string = "") => {
   if (0 < x) {
       x -= 1;
       string += "hello";
       return solution(x, string);
   } else {
       return console.log(string);
   }
};


module.exports = {
  solution,
};
