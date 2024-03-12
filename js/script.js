// button hitung BMI
function validasi() {
  var beratBadan = document.getElementById("bb").value;
  var usia = document.getElementById("u").value;
  var tinggiBadan = document.getElementById("tb").value;

  // Cek apakah nilai teks field kosong
  if (beratBadan.trim() === "") {
    alert("Silakan isi text field terlebih dahulu!");
    return false; // Menghentikan proses
  } else if (usia.trim() === "") {
    alert("Silakan isi text field terlebih dahulu!");
    return false; // Menghentikan proses
  } else if (tinggiBadan.trim() === "") {
    alert("Silakan isi text field terlebih dahulu!");
    return false; // Menghentikan proses
  }

  return true; // Mengizinkan proses
}

function hitung() {
  if (!validasi()) {
    return; // Hentikan proses jika validasi gagal
  }

  let bb = parseFloat(document.getElementById("bb").value);
  let tb = parseFloat(document.getElementById("tb").value);
  let bmi = bb / (tb * tb);
  let hasil = bmi.toFixed(2);
  var ktr;
  document.getElementById("hasil").innerHTML = hasil;

  if (hasil < 18.15) {
    ktr = "Kekurangan Berat Badan";
  } else if (hasil >= 18.15 && hasil <= 24.9) {
    ktr = "Normal (ideal)";
  } else if (hasil >= 25.0 && hasil <= 29.9) {
    ktr = "Kelebihan Berat Badan";
  } else {
    ktr = "Obesitas (kegemukan)";
  }

  document.getElementById("keterangan").innerHTML = ktr;
}

// button Reset
function reset() {
  document.getElementById("bb").value = " ";
  document.getElementById("u").value = " ";
  document.getElementById("tb").value = " ";
  document.getElementById("hasil").innerHTML = "0";
  document.getElementById("keterangan").innerHTML = "-";
}
