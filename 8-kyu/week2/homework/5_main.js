function countSheeps(arrayOfSheep) {
  var sum = 0;
  for (var item of arrayOfSheep) {
    if (item === true) sum++;
  }
  return sum;
}
