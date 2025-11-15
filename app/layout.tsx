import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Toko Wiwin - Product Catalog",
  description: "Browse our product catalog",
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

