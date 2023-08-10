function solution(a, b) {
  result = "";
  return a.length > b.length ? result + b + a + b : result + a + b + a;
}
console.log(solution("1", "45"));
