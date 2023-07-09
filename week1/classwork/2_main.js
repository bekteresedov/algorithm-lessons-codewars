function tripleTrouble(one, two, three) {
  let output = [];
  for (let i = 0; i < one.length; i++) {
    output.push(one[i]);
    output.push(two[i]);
    output.push(three[i]);
  }
  return output.join("");
}
