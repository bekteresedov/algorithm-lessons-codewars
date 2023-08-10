function capitalizeWord(word) {
  return word.split("")[0].toUpperCase() + word.substring(1);
}

console.log(capitalizeWord("word"));
