function displayResult(result, limit) {
  console.log(result.slice(0, limit));
}
function searchName(keyword, limit, callback) {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  const result = name.filter((item) => item.toLowerCase().includes(keyword));
  callback(result, limit);
}
searchName("an", 3, displayResult);
