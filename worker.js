// Menambahkan event listener untuk proses instalasi Service Worker
self.addEventListener("install", async event => {
  // Membuka (atau membuat jika belum ada) cache dengan nama "pwa-BlogWisata"
  const cache = await caches.open("pwa-BlogWisata");

  // Menambahkan semua file berikut ke dalam cache agar dapat digunakan secara offline
  cache.addAll([
    "app.js",
    "index.html" ,
    "daftar.html",
    "login.html",
    "images/about.png",
    "images/Aku.jpg",
    "images/banner2.png",
    "images/bunker.jpg",
    "images/bunker1.jpg",
    "images/bunker2.jpg",
    "images/images.jpeg",
    "images/kaliurang.jpg",
    "images/kaliurang1.jpg",
    "images/kaliurang2.jpg",
    "images/klangon.jpg",
    "images/klangon1.jpg",
    "images/klangon2.jpg",
    "images/logo.png",
    "images/ngandong1.jpeg",
    "images/pindul.jpg",
    "images/pindul1.jpg",
    "images/pinus.jpg",
    "images/pinus1.jpg"
  ]); 
});
 
// Menambahkan event listener untuk menangani semua permintaan fetch dari aplikasi
self.addEventListener("fetch", event => {
  // Menangani permintaan fetch dengan mencoba mencocokkan dari cache terlebih dahulu
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Jika ditemukan di cache, gunakan versi cache
      // Jika tidak, lakukan fetch dari jaringan
      return cachedResponse || fetch(event.request);
    })
  )
});
