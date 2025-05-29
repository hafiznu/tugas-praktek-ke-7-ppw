// Tangkap tombol berdasarkan class
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");

// Tambahkan event listener ke tombol REGISTER
signupBtn.addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

// Tambahkan event listener ke tombol LOGIN
loginBtn.addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

const words = ["HOROR", "ROMANCE", "COMEDY", "PALEMBANG"];
let index = 0;

const wordElement = document.querySelector(".changing-word");

setInterval(() => {
  index = (index + 1) % words.length; // loop balik ke awal
  wordElement.textContent = words[index];
}, 2000); // setiap 2000ms = 2 detik
