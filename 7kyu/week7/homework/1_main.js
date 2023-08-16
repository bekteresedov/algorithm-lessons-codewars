function distinct(a) {
  const newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (!newArray.includes(a[i])) newArray.push(a[i]);
  }
  return newArray;
}

console.log(distinct([1, 2, 1, 1, 3, 2]));
