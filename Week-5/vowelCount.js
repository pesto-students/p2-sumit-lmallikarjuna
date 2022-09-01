function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const map = new Map();
  for (const char of str) {
    if (isVowel(char)) {
      map.set(char, map.get(char) + 1 || 1);
    }
  }
  return map;
}

console.log(vowelCount("Lohith Mallikarjun"));
