function findSmallestInt(args) {
  let min = Infinity;
  for (const element of args) {
    if (element < min) min = element;
  }
  return min;
}
