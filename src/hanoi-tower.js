module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let turns   = 2 ** disksNumber - 1,
      seconds = Math.floor(turns / turnsSpeed * 60 * 60);

  return {
    turns,
    seconds
  }
};