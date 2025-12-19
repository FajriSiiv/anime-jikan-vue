1. Alur Kerja (Workflow) Pengembangan

Agar tidak bingung di tengah jalan, sebaiknya kamu mengikuti urutan ini:

    Eksplorasi API: Buka dokumentasi Jikan.moe. Coba akses beberapa endpoint (seperti /top/anime atau /anime/{id}) melalui browser untuk melihat struktur datanya (JSON).

    Perancangan UI (Wireframing): Gambar sketsa kasar di kertas atau Figma. Tentukan di mana posisi search bar, kartu anime, dan navigasi.

    Setup Dasar: Inisialisasi proyek (menggunakan React, Vue, atau HTML/JS biasa) dan pasang library pendukung (seperti Axios untuk fetch data atau Tailwind CSS untuk styling).

    Fetching Data: Buat fungsi utama untuk mengambil data dari API.

    Pembuatan Komponen: Buat komponen yang bisa dipakai berulang, seperti Anime Card (kartu kecil berisi poster dan judul).

    Routing: Atur perpindahan antar halaman (misal: klik poster di Home lalu pindah ke halaman Detail).

2. Struktur Halaman yang Harus Ada

Untuk website anime list yang solid, setidaknya kamu membutuhkan 4 halaman utama:
A. Halaman Utama (Home)

Ini adalah wajah dari website kamu. Fokusnya adalah memberikan konten instan kepada pengunjung.

    Hero Section: Banner besar yang menampilkan anime terpopuler musim ini.

    Top Anime: Daftar 10-20 anime dengan skor tertinggi.

    Anime Seasonal: Daftar anime yang sedang tayang sekarang (Current Season).

    Search Bar: Kolom pencarian yang mudah ditemukan.

B. Halaman Hasil Pencarian (Search Result)

Halaman ini muncul ketika user mengetikkan judul di search bar.

    Menampilkan daftar anime yang relevan dengan kata kunci.

    Filter & Sorting: Fitur opsional untuk menyaring berdasarkan genre, status (tamat/sedang tayang), atau rating.

C. Halaman Detail Anime

Inilah inti dari sebuah website list. Ketika satu anime diklik, tampilkan informasi mendalam:

    Informasi Teknis: Skor, ranking, jumlah episode, durasi, dan studio.

    Sinopsis: Ringkasan cerita.

    Trailer: Embed video YouTube dari data API.

    Characters & Voice Actors: Daftar karakter penting.

D. Halaman List Favorit (Opsional tapi Keren)

Jika kamu ingin fitur lebih, gunakan Local Storage pada browser agar user bisa menyimpan anime ke daftar "Ingin Ditonton" atau "Favorit" tanpa perlu database.
3. Fitur Tambahan untuk Nilai Plus

Jika kamu ingin website ini terlihat lebih profesional, pertimbangkan fitur berikut:

    Dark Mode: Sangat disukai oleh komunitas pecinta anime.

    Pagination / Infinite Scroll: Agar halaman tidak berat saat memuat ratusan data anime.

    Skeleton Loading: Menampilkan kotak abu-abu yang bergetar saat data sedang di-load agar user tahu website tidak hang.