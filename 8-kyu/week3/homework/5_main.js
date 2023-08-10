function addLength(str) {
  const newArray = str.split(" ");
  for (let index = 0; index < newArray.length; index++) {
    newArray[index] = newArray[index] + ` ${newArray[index].length}`;
  }
  return newArray;
}

console.log(addLength("apple ban"));
