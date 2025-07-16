import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Anils E-Ticaret Eğitimi | Shopify, Amazon FBA ve Dijital Pazarlama Kursları",
  description: "E-ticaret dünyasında başarıya giden yolunuz. Shopify, Amazon FBA, dijital pazarlama ve daha fazlası ile uzmanlaşın. Sıfırdan başlayarak profesyonel seviyeye ulaşın.",
  keywords: "e-ticaret, shopify, amazon fba, dijital pazarlama, online kurs, eğitim",
  authors: [{ name: "Anils Eğitim" }],
  creator: "Anils",
  publisher: "Anils",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://anils.com'),
  openGraph: {
    title: "Anils E-Ticaret Eğitimi",
    description: "E-ticaret dünyasında başarıya giden yolunuz. Uzman eğitmenlerden öğrenin.",
    url: 'https://anils.com',
    siteName: 'Anils',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anils E-Ticaret Eğitimi",
    description: "E-ticaret dünyasında başarıya giden yolunuz",
    creator: '@anils',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} font-sans bg-slate-900 text-slate-100`}>
        <AuthProvider>
          <Toaster position="top-center" />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
