const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 var lohs = [
  `--discard-next`,
  `--discard-prev`,
  `--double-next`,
  `--double-prev`,
]
var transform = (arr) => {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")

  var res = [];
  var isDisc = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {

      i += 2;
      isDisc = true;

    } else if (arr[i] === '--double-prev' && !isDisc && res[res.length - 1]) {
      res.push(res[res.length - 1]);
      continue;
    }
    else if (arr[i] === '--discard-prev') !isDisc && res.pop();
    else if (arr[i] === '--double-next') arr[i + 1] && res.push(arr[i + 1])
    else if (!lohs.includes(arr[i])) {
      res.push(arr[i]);
    }


    isDisc =  false;

  }

  return res;
}
module.exports = {
  transform
};
