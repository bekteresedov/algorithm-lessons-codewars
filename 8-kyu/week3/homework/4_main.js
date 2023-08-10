function shortcut(string) {
  return string
    .split("")
    .filter(
      (element) =>
        !(
          element === "a" ||
          element === "e" ||
          element === "i" ||
          element === "o" ||
          element === "u"
        )
    )
    .join("");
}

console.log(shortcut("hello"));
