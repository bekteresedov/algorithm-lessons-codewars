function encode(str) {
  const al = "abcdefghijklmnopqrstuvwxyz";
  let string = "";
  for (const element of str.toLowerCase().split("")) {
    if (al.includes(element)) {
      string += al.indexOf(element) + 1;
    } else {
      string += element;
    }
  }
  return string;
}

console.log(encode("ABCD"));
