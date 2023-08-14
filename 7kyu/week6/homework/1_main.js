function convert(number) {
  let result = [];
  for (let i = 1; i < number.length; i += 2) {
    result.push(number[i - 1] + number[i]);
  }
  return result.map((el) => String.fromCharCode(el)).join("");
}

console.log(convert("656667"));
