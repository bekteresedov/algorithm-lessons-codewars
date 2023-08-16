function dropCap(n) {
  return n
    .split(" ")
    .map((element) => {
      if (element.length > 2) {
        return element[0].toUpperCase() + element.substring(1);
      }
      return element;
    })
    .join(" ");
}

console.log(dropCap("Apple of Banana"));
