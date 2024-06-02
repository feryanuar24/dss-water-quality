## Persiapan

Mulailah dengan menginstal perangkat lunak yang dibutuhkan untuk menjalankan sistem, seperti XAMPP, Composer, Node.js, Visual Studio Code, dan Git.

## Cloning 

Gunakan perintah git untuk menyalin repositori feryanuar24/dss-water-quality ke komputer lokal agar dapat mengakses repositori tersebut.

## Instalasi

- Buka terminal atau command prompt, arahkan ke direktori proyek yang baru saja disalin, lalu jalankan perintah "npm install" untuk menginstal semua dependensi package manager frontend yang diperlukan.
- Selanjutnya, jalankan perintah "composer install" di terminal untuk menginstal semua dependensi PHP yang diperlukan.

### Konfigurasi

Duplikat file .env.example menjadi .env. Buka file .env yang baru dan sesuaikan konfigurasi seperti berikut:

- DB_Connection=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=dss_water_quality
- DB_ROOT=root
- DB_PASSWORD=

## App Key

Gunakan perintah "php artisan key:generate" untuk menghasilkan kunci aplikasi yang unik. Kunci ini penting untuk mengenkripsi data sensitif.

## Basis Data

- Jalankan perintah "php artisan migrate" untuk menjalankan semua migrasi database yang ada dalam proyek. Ini akan membuat tabel-tabel yang diperlukan dalam basis data sesuai dengan skema migrasi yang telah ditentukan.
- Aktifkan MySQL pada aplikasi XAMPP dengan mengklik tombol start untuk Apache dan MySQL, dan tunggu hingga tulisan menjadi warna hijau, menandakan bahwa server basis data lokal telah siap digunakan.

## Run

Terakhir, jalankan perintah "php artisan serve" dan "npm run dev" untuk menjalankan sistem dari sisi frontend dan sisi backend secara bersamaan, lalu akses tautan http://127.0.0.1:8000/ untuk mengaksesnya.
