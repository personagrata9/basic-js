const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = Math.pow(2, diskNumber) - 1;
  let seconds = Math.floor(turns / turnsSpeed * 3600);
  function calculation (turns, seconds) {
    return {
      turns,
      seconds,
    }
  }
  let hanoi = calculation(turns, seconds);
  return hanoi;
};
