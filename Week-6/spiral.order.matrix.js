function spiralOrderMatrix(array) {
  const spiralArray = [];
  let rowStart = 0;
  let columnStart = 0;
  let rowEnd = array.length - 1;
  let columnEnd = array[0].length - 1;

  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    for (let i = columnStart; i <= columnEnd; i++) {
      spiralArray.push(array[rowStart][i]);
    }

    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      spiralArray.push(array[i][columnEnd]);
    }

    columnEnd--;

    for (let i = columnEnd; i >= columnStart; i--) {
      spiralArray.push(array[rowEnd][i]);
    }

    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      spiralArray.push(array[i][columnStart]);
    }

    columnStart++;
  }

  return spiralArray;
}

console.log(spiralOrderMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));
