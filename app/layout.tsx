import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
 title: "Toko Wiwin — Katalog Produk",
description: "Katalog produk lengkap dari Toko Wiwin. Cek harga terbaru, stok, dan informasi lengkap.",
keywords: ["toko wiwin", "katalog produk", "produk murah", "belanja"],
openGraph: {
title: "Toko Wiwin — Katalog Produk",
description: "Katalog produk lengkap dari Toko Wiwin.",
url: "https://tokowiwin.vercel.app",
siteName: "Toko Wiwin",
type: "website",
},
twitter: {
card: "summary_large_image",
title: "Toko Wiwin — Katalog Produk",
description: "Katalog produk lengkap dari Toko Wiwin.",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="A4XgTP8Eqg63C3DnTzsm_9CHXGSCo9E0l6ED76fyRQk" />
      
      </head>
      <body>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}

