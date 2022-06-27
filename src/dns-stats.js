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
  domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]
  let mas = [];
  let i = 1;
  let res = {};
  function getDNS() {
      domains.forEach(e => {
          let lenE = e.split(".").length;
          console.log(e.split(".")[lenE - 2])
          
          // mas.push(e.split(".").slice(lenE - 1, lenE))
          // console.log(e.split(".").slice(e.split(".").length - 1, e.split(".").length).join("."))
          // res = e.split(".").slice(lenE).join(".");
          // mas.push(res);
          // console.log(mas)
      })
      // return mas
      // return res
  }
  console.log(getDNS())
}

module.exports = {
  getDNSStats
};
