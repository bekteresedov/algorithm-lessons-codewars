function explode(s) {
  return s
    .split("")
    .map((e) => e.repeat(e))
    .join("");
}
