function fakeBin(x) {
  var result = "";
  for (var item of x.split("")) {
    if (item < 5) {
      result += 0;
    } else {
      result += 1;
    }
  }
  return result;
}

console.log(fakeBin("45385593107843568"));
