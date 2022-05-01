const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) console.log('Unable to determine the time of year!');
  if(date != "object") throw new NotImplementedError('Invalid date!')
    let m = date.getMonth() + 1;
      if(m === 12 || m === 1 || m === 2) return "winter"; 
      if(m === 3 || m === 4 || m === 5) return "spring";
      if(m === 6 || m === 7 || m === 8) return "summer";
      if(m === 9 || m === 10 || m === 11) return "autumn"; 
  }

module.exports = {
  getSeason
};