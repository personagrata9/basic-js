const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if ( !Array.isArray(members) || members.length === 0 || members === null ) return false;
  let membersSorted = members.map((elem) => typeof elem === 'string' ?  elem.trim() : elem);
  let team = [];
  for (let i = 0; i < membersSorted.length; i++) {
    if ( typeof membersSorted[i] === 'string') {
    team.push(membersSorted[i].substr(0, 1).toUpperCase());
  }
  }
  let res = team.sort().join('');
  return res;
};
