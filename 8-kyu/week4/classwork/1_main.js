function positiveSum(arr) {
  return arr.filter((e) => e > 0).reduce((x, y) => x + y, 0);
}
