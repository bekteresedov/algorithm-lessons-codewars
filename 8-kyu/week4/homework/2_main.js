function abbrevName(name) {
  return name
    .split(" ")
    .map((e) => e[0])
    .join(".")
    .toUpperCase();
}
