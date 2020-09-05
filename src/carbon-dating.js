const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(SAMPLE_ACTIVITY) {

  if (typeof SAMPLE_ACTIVITY !== "string") return false;
  if (SAMPLE_ACTIVITY === '0') return false;

  let regexpTest = SAMPLE_ACTIVITY.match(/^((\d+)((.?)\d+)?)/);

  if (!regexpTest) return false;

  let activity = regexpTest[1];

  let k = 0.693 / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / activity) / (k);

  if (years < 0) return false;

  return Math.ceil(years);
};