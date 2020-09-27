module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        array.push(arr[i + 1]);
      };
      continue;
    }
    if (arr[i] === '--double-prev') {
      if (i !== 0 && arr[i - 2] !== "--discard-next") {
        array.push(arr[i - 1]);
      };
      continue;
    }
    if (arr[i] === '--discard-next') {
      i++;
      continue;
    }

    if (arr[i] === '--discard-prev') {
      if (array.length !== 0 && arr[i - 2] !== "--discard-next") {
        array.pop();
      }
      continue;
    }

    array.push(arr[i]);
  }

  return array
}