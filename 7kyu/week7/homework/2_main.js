function vowel2index(str) {
  const sait = ["a", "e", "i", "o", "u"];
  const newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (sait.includes(str[i].toLowerCase())) {
      newArray.push(i);
    } else {
      newArray.push(str[i]);
    }
  }
  return newArray.join("");
}

console.log(vowel2index("Tomorrow is going to be raining"));
