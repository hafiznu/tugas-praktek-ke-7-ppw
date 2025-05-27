function konversi() {
  const input = document.getElementById("decimalInput").value;
  const decimal = parseInt(input);

  if (isNaN(decimal)) {
    alert("Masukkan Angka yang benar!");
    return;
  }

  const biner = decimal.toString(2);
  const oktal = decimal.toString(8);
  const hex = decimal.toString(16).toUpperCase();

  alert(`Biner : ${biner}\nOktal : ${oktal}\nHeksadesimal : ${hex}`);
}
