import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
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
}
