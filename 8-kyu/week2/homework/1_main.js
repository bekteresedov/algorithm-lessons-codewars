function noBoringZeros(n) {
  var array = n.toString().split("");

  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === "0") {
      array.pop();
    } else {
      break;
    }
  }

  return Number(array.join(""));
}

console.log(noBoringZeros(-1050));
