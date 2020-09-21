const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  defaultOptions = {
      repeatTimes: 1,
      separator: '+',
      addition: '',
      additionRepeatTimes: 0,
      additionSeparator: '|'
  }

  var opt = Object.assign(defaultOptions, options);

  if (!Number(opt.repeatTimes)) opt.repeatTimes = 1;
  if (!Number(opt.additionRepeatTimes )) opt.additionRepeatTimes = 1;
  if (!(opt.separator  ).toString()) opt.separator = '+';
  if (!(opt.additionSeparator).toString()) opt.additionSeparator  = '|';

  let add = (opt.addition + '\/').repeat(opt.additionRepeatTimes).split('\/').slice(0, -1).join(opt.additionSeparator);

  let txt = (str + add + '\/').repeat(opt.repeatTimes).split('\/').slice(0, -1).join(opt.separator)

  return txt;
};
  