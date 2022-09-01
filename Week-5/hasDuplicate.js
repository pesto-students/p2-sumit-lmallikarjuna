function hasDuplicate(arr) {
  const set = new Set();
  for (const element of arr) {
    if (set.has(element)) return true;
    else set.add(element);
  }
  return false;
}

console.log(hasDuplicate([1, 4, 3, 6, 2, 6]));
console.log(hasDuplicate([1, 4, 3, 6, 2]));
