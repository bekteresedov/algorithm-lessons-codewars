String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((element) => element[0].toUpperCase() + element.substring(1))
    .join(" ");
};
