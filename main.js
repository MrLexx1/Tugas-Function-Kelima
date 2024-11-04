//  ~~~~~ TUGAS KELIMA ~~~~~ \\

function hitungDiskon(harga, diskon) {
  let jumlahDiskon = harga * (diskon / 100);
  let hargaSetelahDiskon = harga - jumlahDiskon;
  return hargaSetelahDiskon;
}

let hargaSetelahDiskon = hitungDiskon(100000, 20);
console.log(hargaSetelahDiskon);
