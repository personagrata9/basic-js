const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let arr = backyard.flat();
  let res = arr.filter(item => item === "^^");
  return +res.length;
};
