function checkParenthesis(str) {
  if (str.length == 0) return true;

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];

  for (i of str) {
    if (map[i]) stack.push(map[i]);
    else if (stack.pop() !== i) return false;
  }

  return true;
}

console.log('Input: "[()]{}{()()}"');
console.log("Output: ", checkParenthesis("[()]{}{()()}"));
console.log('Input: "[(])"');
console.log("Output: ", checkParenthesis("[(])"));
