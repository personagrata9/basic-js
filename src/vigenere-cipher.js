const { replace } = require("sinon");
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mode = true) {
		this.mode = mode;
	}

  encrypt(message, key) {
    try {
      !message || !key;
    } catch(e) {
      throw new Error(e);
    }

    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let messageLtrs = message.toUpperCase();
    let keyLtrs = [];
    let k = 0;
    for (let m = 0; m < message.length; m++) {
      if ( alph.includes(messageLtrs[m]) ) {
        keyLtrs.push(key.toUpperCase()[k % key.length]);
        k++;
      } else {
        keyLtrs.push(messageLtrs[m]);
      }
    }

    let res = [];
    for (let r = 0; r < message.length; r++) {
      let messageLtrInd = alph.findIndex((elem) => elem == messageLtrs[r]);
      let keyLtrInd = alph.findIndex((elem) => elem == keyLtrs[r]);
      if ( alph.includes(messageLtrs[r]) ) {
        res.push( alph[ (messageLtrInd + keyLtrInd) % 26 ] );
      } else {
        res.push(messageLtrs[r]);
      }
    }
    return this.mode === true ? res.join('') : res.reverse().join('');
  }
   
  decrypt(message, key) {
    try {
      !message || !key;
    } catch(e) {
      throw new Error(e);
    }

    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let messageLtrs = message.toUpperCase();
    let keyLtrs = [];
    let k = 0;
    for (let m = 0; m < message.length; m++) {
      if ( alph.includes(messageLtrs[m]) ) {
        keyLtrs.push(key.toUpperCase()[k % key.length]);
        k++;
      } else {
        keyLtrs.push(messageLtrs[m]);
      }
    }

    let res = [];
    for (let r = 0; r < message.length; r++) {
      let messageLtrInd = alph.findIndex((elem) => elem == messageLtrs[r]);
      let keyLtrInd = alph.findIndex((elem) => elem == keyLtrs[r]);
      if ( alph.includes(messageLtrs[r]) ) {
        res.push( alph[ (messageLtrInd - keyLtrInd + 26) % 26 ] );
      } else {
        res.push(messageLtrs[r]);
      }
    }
    return this.mode === true ? res.join('') : res.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
