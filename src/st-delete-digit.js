import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = n.toString();
  let arr = []
  for (let pos = 0; pos < str.length; pos++) {
    arr.push(str.replace(str[pos], ''));
  }
  return Math.max(...arr);
}
