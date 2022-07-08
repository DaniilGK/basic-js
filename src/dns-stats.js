const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let array1 = [], array2 = [];
let result = {};
  domains.forEach(e => {
    array1.push(e.split(".").map(e => "." + e));
  });
  array1 = array1.map(e => e.reverse());

  array1.forEach(e => {
    for(let i = 0; i < e.length; i++) {
      array2.push(e.slice(0, i + 1).join(""));
    }
  });

  array2.forEach(e => {
    result[`${e}`] = (result[e] || 0) + 1;
  });
  return result;
}

module.exports = {
  getDNSStats
};
