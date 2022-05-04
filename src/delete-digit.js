const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = n.toString();
    let cop = [];
    let res = [];
    for(let i = 0; i < n.length; i++) {
        cop.push(n.split(""));
    }
    for(let j = 0; j < cop.length; j++) {
        cop[j].splice(j, 1);
        res.push(cop[j])
    }
    return Math.max(...res.map(e => e.join("")))
}

module.exports = {
  deleteDigit
};
