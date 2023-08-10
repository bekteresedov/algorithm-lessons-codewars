function digitize(n) {
  //code here
  return n
    .toString()
    .split("")
    .reverse()
    .map((e) => Number(e));
}
