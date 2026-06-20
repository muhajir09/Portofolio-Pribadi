// Efek Scroll pada Navigasi
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Jika halaman di-scroll lebih dari 50px, tambahkan kelas 'scrolled'
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fungsionalitas Menu Burger untuk Mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Menampilkan atau menyembunyikan menu navigasi
    nav.classList.toggle('nav-active');

    // Memicu animasi ikon burger menjadi 'X'
    burger.classList.toggle('toggle');
});

// Menutup menu mobile otomatis saat salah satu tautan ditekan
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// --- Fitur Zoom Foto Profil (Modal) ---
const modal = document.getElementById("image-modal");
const profilePic = document.getElementById("nav-profile-pic");
const enlargedImg = document.getElementById("enlarged-img");
const closeModal = document.querySelector(".close-modal");

// Buka modal saat foto profil diklik
profilePic.addEventListener("click", function() {
    modal.style.display = "block";
    enlargedImg.src = this.src; // Mengambil file gambar yang sama
});

// Tutup modal saat tombol 'X' diklik
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Tutup modal jika user mengklik area gelap di luar gambar
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});