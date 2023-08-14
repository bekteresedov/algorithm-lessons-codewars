function dropCap(n) {
  const alma = [];
  for (var a of n.split(" ")) {
    if (a.length > 2) {
      alma.push(a[0].toUpperCase() + a.substring(1));
    } else {
      alma.push(a);
    }
  }
  return alma.join(" ");
}

console.log(
  dropCap(
    "Revelation of the contents outraged American public opinion, and helped generate"
  )
);
