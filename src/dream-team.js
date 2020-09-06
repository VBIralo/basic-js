module.exports = function createDreamTeam(members) {
  if (!members || members.length == 0 || !Array.isArray(members)) return false;

  return members.filter(a => typeof a == 'string').map(n => n.match(/(\w+)/)[1][0].toUpperCase()).sort().join('');
};