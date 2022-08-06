function findJudge(n, trust) {
  const trustArray = new Array(n).fill(0);

  for (let i = 0; i < trust.length; i++) {
    const member = trust[i][1];
    trustArray[member - 1]++;
  }

  let townJudge = -1;
  let temp = -1;

  for (let i = 0; i < trustArray.length; i++) {
    if (temp < trustArray[i]) {
      temp = trustArray[i];
      townJudge = i + 1;
    }
  }

  for (let i = 0; i < trust.length; i++) {
    if (trust[i][0] === townJudge) return -1;
  }

  return trustArray[townJudge - 1] === n - 1 ? townJudge : -1;
}
