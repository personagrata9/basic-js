const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addSep = options.additionSeparator ? ( options.additionSeparator ) : '|';
  let addRepTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let add = options.addition ? ( String(options.addition) + addSep ).repeat( addRepTimes ) : '';
  let addRes = add.slice( 0, add.lastIndexOf( addSep ) );

  let sep = options.separator ? options.separator : '+';
  let repTimes = options.repeatTimes ? options.repeatTimes : 1;

  let res = ( str && addRes ) ? ( str + addRes + sep ).repeat( repTimes ) : ( str + sep ).repeat( repTimes );
  return res = res.slice( 0, res.lastIndexOf(sep) );
};
  