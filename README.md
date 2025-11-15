# Toko Wiwin - Product Catalog

Website katalog produk profesional yang dibangun dengan Next.js 15, TypeScript, TailwindCSS, dan Firebase.

## Features

- 📦 Daftar produk dengan pencarian dan filter kategori
- 🔍 Halaman detail produk yang menarik
- 🔐 Sistem autentikasi admin terpisah
- ➕ Tambah produk baru (hanya admin)
- ✏️ Edit produk (hanya admin)
- 🗑️ Hapus produk (hanya admin)
- 📊 Dashboard admin untuk mengelola produk
- 🖼️ Upload gambar ke Firebase Storage
- 📱 Desain responsif dan modern

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Firebase** (Firestore + Storage + Authentication)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with your Firebase configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Firebase Setup

1. Buat project Firebase di [Firebase Console](https://console.firebase.google.com/)
2. Aktifkan **Firestore Database** (mode production atau test)
3. Aktifkan **Storage**
4. Aktifkan **Authentication** dengan metode Email/Password
5. Salin konfigurasi Firebase ke `.env.local`

## Setup Admin User

Untuk membuat user admin:

1. Buat user baru melalui Firebase Authentication Console
2. Setelah user dibuat, catat **User UID** dari Firebase Console
3. Di Firestore, buat collection baru bernama `admins`
4. Tambah document baru dengan ID = **User UID** (dari langkah 2)
5. Document bisa kosong atau berisi field `role: "admin"`

**Contoh struktur Firestore:**
```
Collection: admins
  Document ID: [User UID dari Firebase Auth]
    (bisa kosong atau berisi field apapun)
```

Setelah setup ini, user tersebut bisa login di `/admin/login` dan akan memiliki akses admin.

## Project Structure

```
/app
  /products
    /[id]
      page.tsx
    page.tsx
  /admin
    /login
      page.tsx
    /dashboard
      page.tsx
    /add
      page.tsx
    /edit
      /[id]
        page.tsx
        EditProductForm.tsx
        EditPageWrapper.tsx
/contexts
  AuthContext.tsx
/firebase
  config.ts
  products.ts
/components
  ProductCard.tsx
  ProductForm.tsx
  Navigation.tsx
  AdminRoute.tsx
  AdminEditButton.tsx
/lib
  types.ts
```

## Pages

- `/` - Halaman beranda
- `/products` - Katalog produk (semua user)
- `/products/[id]` - Detail produk (semua user)
- `/admin/login` - Login admin
- `/admin/dashboard` - Dashboard admin (hanya admin)
- `/admin/add` - Tambah produk (hanya admin)
- `/admin/edit/[id]` - Edit produk (hanya admin)

## Security

- Route admin dilindungi dengan autentikasi
- Hanya user yang terdaftar di collection `admins` yang bisa akses fitur admin
- User biasa hanya bisa melihat produk

