import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let addSep = options.additionSeparator ? ( options.additionSeparator ) : '|';
  let addRepTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let add = ( (options.addition === null) || (options.addition === false) || options.addition ) ? ( String(options.addition) + addSep ).repeat( addRepTimes ) : '';
  let addRes = add.slice( 0, add.lastIndexOf( addSep ) );

  let sep = options.separator ? options.separator : '+';
  let repTimes = options.repeatTimes ? options.repeatTimes : 1;

  let res = ( str + addRes + sep ).repeat( repTimes );
  return res = res.slice( 0, res.lastIndexOf(sep) );
}
