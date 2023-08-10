function betterThanAverage(classPoints, yourPoints) {
  var sum = 0;

  for (var item of classPoints) {
    sum += item;
  }
  if (sum / classPoints.length < yourPoints) return true;
  return false;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
