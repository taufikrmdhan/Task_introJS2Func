function searchNama(kunci, batas, callback) {
  const nama = [
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
  const hasil = nama.filter((item) => item.toLowerCase().includes(kunci));
  callback(hasil, batas);
}
tampilkanHasil = (hasil, batas) => {
  console.log(hasil.slice(0, batas));
}
searchNama("an", 3, tampilkanHasil);
