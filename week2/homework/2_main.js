function isPalindrome(x) {
  var palindrome = x.split("").reverse().join("").toLowerCase();
  return palindrome === x.toLowerCase();
}

console.log(isPalindrome("Aba"));
