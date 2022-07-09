// Brute Force
function getSubArraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function maxSumSubArray(array) {
  let maxSum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let sumOfSubArray = getSubArraySum(array.slice(i, j + 1));
      if (maxSum < sumOfSubArray) maxSum = sumOfSubArray;
    }
  }

  return maxSum;
}

console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane's Algorithm
function kadaneAlgorithm(array) {
  let maxSum = array[0];
  let maxEndingHere = array[0];

  for (let i = 1; i < array.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + array[i], array[i]);
    maxSum = Math.max(maxSum, maxEndingHere);
  }

  return maxSum;
}

console.log("Kadane: ", kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
