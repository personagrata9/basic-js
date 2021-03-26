const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  try {
    !Array.isArray(arr);
  } catch(e) {
    throw new Error(e);
  }
  if (arr.length == 0) { 
    return arr;
  }

  let res = new Array(...arr);
};
