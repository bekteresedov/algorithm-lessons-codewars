function inverseSlice(items, a, b) {
  const newArray = [];
  for (const index in items) {
    if (index >= a && index < b) {
      continue;
    } else {
      newArray.push(items[index]);
    }
  }
  return newArray;
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
