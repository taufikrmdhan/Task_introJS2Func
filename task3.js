function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length > 5) {
      let data = dataArray.filter((item) => {
        return item >= nilaiAwal && item <= nilaiAkhir;
      });
      if (data == "") {
        console.log("Nilai tidak ditemukan");
      } else {
        console.log(data.sort((a, b) => a - b));
      }
    } else {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
  return;
}
seleksiNilai(5, 20, [2,  22, 9,5,5,20]);
