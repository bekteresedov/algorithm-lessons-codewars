function uniTotal(string) {
  return string
    .split("")
    .map((e) => e.charCodeAt())
    .reduce((x, y) => x + y, 0);
}
