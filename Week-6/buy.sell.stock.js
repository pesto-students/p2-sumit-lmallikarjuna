function getMaxProfit(array) {
  let maxProfit = 0;
  let currentSmallestNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > currentSmallestNumber) {
      maxProfit = Math.max(maxProfit, array[i] - currentSmallestNumber);
    } else {
      currentSmallestNumber = array[i];
    }
  }

  return maxProfit;
}

console.log("Input: ", [7,1,5,3,6,4]);
console.log(`Output: ${getMaxProfit([7,1,5,3,6,4])}`);

console.log("Input: ", [7,6,4,3,1]);
console.log(`Output: ${getMaxProfit([7,6,4,3,1])}`);
