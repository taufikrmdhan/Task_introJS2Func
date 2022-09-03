function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length > 5) {
      let data = dataArray.filter((item) => {
        return item > nilaiAwal && item < nilaiAkhir;
      });
      console.log(data.sort((a, b) => a - b));
    } else {
      return "Jumlah angka dalam dataArray harus lebih dari 5";
    }
  } else {
      return "Nilai akhir harus lebih besar dari nilai awal";
  }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
