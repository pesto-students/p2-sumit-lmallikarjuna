function sortArray(array) {
  let one = 0;
  let middle = 0;
  let two = array.length - 1;

  while (middle >= one && middle <= two) {
    if (array[middle] === 0) {
      array[middle] = array[one];
      array[one] = 0;
      one++;
    } else if (array[middle] === 2) {
      array[middle] = array[two];
      array[two] = 2;
      two--;
    } else if (array[middle] === 1) {
      middle++;
    }
  }

  return array;
}

console.log(sortArray([1, 1, 2, 1, 0, 2, 1, 0, 0]));
