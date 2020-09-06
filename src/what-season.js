module.exports = function getSeason(date) {
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']

  if (!date) return 'Unable to determine the time of year!';
  if (typeof date.getMonth !== 'function' || Object.prototype.toString.call(date) !== '[object Date]') throw new Error();

  return seasons[date.getMonth()]
}