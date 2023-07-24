function strCount(str, letter) {
  return str.split("").filter((element) => element == letter).length;
}
console.log(strCount(" ", "o"));
