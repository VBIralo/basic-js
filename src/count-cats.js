module.exports = function countCats(matrix) {
  let count = 0;

  matrix.join().split(',').map(word => word == '^^' ? count += 1 : false)

  return count;
};