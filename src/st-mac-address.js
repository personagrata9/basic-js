import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {

let arr1 = n.substr(0, 2).match(/[0-9A-F][0-9A-F]/);
let arr2 = n.substr(2, n.length-1).match(/-[0-9A-F][0-9A-F]/g);

return (!!arr1 && arr1[0].length === 2) && (!!arr2 && arr2.join('').length === n.substr(2, n.length-1).length);
}
