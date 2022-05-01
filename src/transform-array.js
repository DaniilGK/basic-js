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
function transform(arr) {
  if(!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  let res = [];
  arr.map((value, index, elem) => {
      if(typeof value != "string") res.push(elem[index]);
        if(value == "--double-next") res.push(elem[index + 1]);
        if(value == "--double-prev") res.push(elem[index - 1]);
        if(value == "--discard-prev") res.pop(elem[index - 1]);
        if(value == "--discard-next") res.pop(index);
  });
  return res.filter(e => typeof e != "undefined")
}

module.exports = {
  transform
};
