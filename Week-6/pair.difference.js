function getPair(array, k) {
  const pair = [];

  for (let i = 0; i < array.length; i++) {
    if (pair.includes(array[i])) return 1;
    else pair.push(array[i] + k);
  }

  return 0;
}

console.log("Input: A=", [5, 10, 3, 2, 50, 80], "B=", 78);
console.log(getPair([5, 10, 3, 2, 50, 80], 78));
console.log("Input: A=", [-10, 20], " B=", 30);
console.log(getPair([-10, 20], 30));
