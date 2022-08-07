function getNextGraterElement(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let nextElement = arr[i + 1];

    if (!nextElement) {
      result.push(-1);
    } else if (arr[i] < nextElement) {
      result.push(nextElement);
    } else {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          result.push(arr[j]);
          break;
        }
      }
    }
  }
  return result;
}

console.log(getNextGraterElement([1, 3, 2, 4]));
console.log(getNextGraterElement([6, 8, 0, 1, 3]));
