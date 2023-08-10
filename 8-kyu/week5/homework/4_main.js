function squareSum(numbers) {
  return numbers.map((e) => e * e).reduce((x, y) => x + y, 0);
}
