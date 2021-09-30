import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
   if ( typeof position !== 'number' || !Number.isInteger(position) || position < 0 || position === 0 || position > this.chain.length) {
     this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain.length = 0; // удаление существующей цепи
    return res;
  }
};
