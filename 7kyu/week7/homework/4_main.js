function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(-arr[i])) {
      return arr[i];
    }
  }
  return 0;
}
