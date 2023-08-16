function validParentheses(parenStr) {
  let one = parenStr.split("(").length;
  let two = parenStr.split(")").length;
  return one == two;
}

console.log(validParentheses(")("));
