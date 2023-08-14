function tiyFizzBuzz(sentence) {
  let sait = "aioue";
  let consonants = "BCDFGHJKLMNPQRSTVWXYZ";
  return sentence
    .split("")
    .map((element) => {
      if (sait.toLocaleUpperCase().includes(element)) {
        return "Iron Yard";
      } else if (sait.includes(element)) {
        return "Yard";
      } else if (consonants.includes(element)) {
        return "Iron";
      } else {
        return element;
      }
    })
    .join("");
}
