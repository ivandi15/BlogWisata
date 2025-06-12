// Memanggil fungsi untuk mendaftarkan Service Worker
registerSW();

// Fungsi async untuk mendaftarkan Service Worker
async function registerSW() {
  // Mengecek apakah browser mendukung API Service Worker
  if ('serviceWorker' in navigator) {
    try {
      // Mendaftarkan file 'sw.js' sebagai Service Worker
      const registration = await navigator.serviceWorker.register("worker.js");       
    } catch (error) {
      // Jika terjadi kesalahan saat registrasi, tampilkan pesan error
      showResult("Error while registering: " + error.message);
    }    
  } else {
    // Jika browser tidak mendukung Service Worker
    showResult("Service workers API not available");
  }
}

// Fungsi untuk menampilkan hasil atau error ke elemen <output>
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}