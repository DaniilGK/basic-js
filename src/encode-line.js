const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let arr = [], mas = [];
	let res = 0, prev = res, curr = res;
		for(let i = 0; i < str.length; i++) {
			arr.push(str[i]);
		}
	
		while(prev != arr.length) {
			if(arr[prev] === arr[curr]) {
				res += 1;
				curr += 1;
			} else if(arr[prev] != arr[curr]) {
				if(res > 1) {
					mas.push(`${res}${arr[prev]}`);
					res = 1;
					prev = curr;
					curr += 1;
				} else {
					mas.push(`${arr[prev]}`);
					res = 1;
					prev = curr;
					curr += 1;
				}
			}
	
		}
		return mas.join("")
}

module.exports = {
  encodeLine
};
