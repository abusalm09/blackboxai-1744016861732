# Sistem Manajemen Laporan Keuangan

Aplikasi web untuk pengelolaan laporan keuangan yang sesuai dengan Standar Akuntansi Keuangan (SAK) Indonesia.

## Fitur

- Dashboard dengan ringkasan keuangan
- Manajemen laporan keuangan (tambah, edit, hapus)
- Tampilan detail laporan
- Validasi input sesuai standar akuntansi
- Responsif untuk desktop dan mobile
- Antarmuka yang modern dan user-friendly

## Teknologi

- HTML5
- Tailwind CSS untuk styling
- JavaScript untuk interaktivitas
- Font Awesome untuk ikon
- Google Fonts (Poppins)

## Struktur Proyek

```
financial-management/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── images/
├── index.html
├── login.html
├── dashboard.html
├── laporan.html
└── laporan-detail.html
```

## Cara Menjalankan

1. Clone repositori ini
2. Pastikan Python terinstal di sistem Anda
3. Buka terminal dan navigasi ke direktori proyek
4. Jalankan server development dengan perintah:
   ```bash
   python3 -m http.server 8000
   ```
5. Buka browser dan akses `http://localhost:8000/financial-management/`

## Pengembangan

Untuk pengembangan production:
1. Install Tailwind CSS sebagai PostCSS plugin atau gunakan Tailwind CLI
2. Optimalkan aset (minify CSS/JS)
3. Implementasikan backend sesuai kebutuhan
4. Tambahkan sistem autentikasi yang aman
5. Konfigurasikan database untuk penyimpanan data

## Kontribusi

1. Fork repositori
2. Buat branch fitur (`git checkout -b fitur/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## Kontak

FinReport Team - support@finreport.com

Project Link: https://github.com/finreport/financial-management