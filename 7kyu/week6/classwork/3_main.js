var capitals = function (word) {
  let a = [];
  word.split("").forEach((el, i) => {
    if (el.toUpperCase() == el) {
      a.push(i);
    }
  });

  return a;
};
