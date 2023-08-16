function processData(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(data[i][0] - data[i][1]);
  }
  return result.reduce((e, i) => e * i, 1);
}

console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);
