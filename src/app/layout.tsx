import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import Script from "next/script";
import "plyr/dist/plyr.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motogpstream.my.id"),

  title: {
    default: "MOTOGPSTREAM  - Live Streaming & Berita MotoGP 2026",
    template: "%s | MOTOGPSTREAM",
  },

  description:
    "Nonton live streaming MotoGP 2026, jadwal race terbaru, klasemen pembalap, hasil balapan, dan berita MotoGP update setiap hari. Kunjungi juga LIVEMotoGP.NET untuk pengalaman streaming tanpa gangguan.",
  keywords: [
    "MOTOGPSTREAM",
    "Live MotoGP",
    "Streaming MotoGP 2026",
    "Jadwal MotoGP",
    "Klasemen MotoGP",
    "Hasil Race MotoGP",
    "Berita MotoGP",
  ],

  authors: [{ name: "MOTOGPSTREAM Team" }],
  creator: "MOTOGPSTREAM",
  publisher: "MOTOGPSTREAM",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://motogpstream.my.id",
    siteName: "MOTOGPSTREAM",
    title: "MOTOGPSTREAM  - Live Streaming & Berita MotoGP 2026",
    description:
      "Nonton live streaming MotoGP 2026, jadwal race terbaru, klasemen pembalap, hasil balapan, dan berita MotoGP update setiap hari. Kunjungi juga LIVEMotoGP.NET untuk pengalaman streaming tanpa gangguan.",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Live Streaming MotoGP 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MOTOGPSTREAM - Live Streaming MotoGP 2026",
    description:
      "Nonton live streaming MotoGP 2026, jadwal race terbaru, klasemen pembalap, hasil balapan, dan berita MotoGP update setiap hari. Kunjungi juga LIVEMotoGP.NET untuk pengalaman streaming tanpa gangguan.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/og-image.png",
    apple: "/og-image.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <script src="https://welcomingexpulsion.com/01/40/c7/0140c7f2b4b2a1bb3e8b3837c856198a.js"></script> */}
        {process.env.VERCEL_ENV  === "production" && (
          <>
            <Script
              src="https://welcomingexpulsion.com/75/f2/b1/75f2b1d2337d82615e4e2a770e1e081d.js"
              strategy="afterInteractive"
            />
          </>
        )}

        <Navbar />

        {children}

        <Footer />
        {process.env.VERCEL_ENV  === "production" && (
          <>
            <Script
              src="https://welcomingexpulsion.com/42/75/b6/4275b6b88bb951ce2cf784078cdde0bd.js"
              strategy="afterInteractive"
            />
          </>
        )}
      </body>
    </html>
  );
}
