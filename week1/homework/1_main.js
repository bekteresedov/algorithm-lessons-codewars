function getAvarge(array) {
  if (!array.length) return 0;
  var sum = 0;
  for (var element of array) {
    sum += element;
  }
  return sum / array.length;
}

var result = getAvarge([3, 4, 5]);
console.log("result: " + result);
