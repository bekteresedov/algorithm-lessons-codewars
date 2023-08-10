function findMultiples(integer, limit) {
  var array = [];
  for (var i = integer; i <= limit; i += integer) {
    array.push(i);
  }
  return array;
}
