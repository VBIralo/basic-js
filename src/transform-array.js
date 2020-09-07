module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let array = [];

  arr.map((n, i) => {
    if (n == '--double-next') return array[i] = arr[i + 1];
    if (n == '--double-prev') return array[i] = arr[i - 1];
    if (n == '--discard-next') return arr.splice(i + 1, 1);
    if (n == '--discard-prev') return array.splice(i - 1, 1);
    return array.push(n);
  })

  return array.filter(a => a !== undefined);
}