import type { Metadata } from "next";
import { Inter, Merriweather, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yayasan Yuana Bhakti Nusantara | Indonesia Youth Movement",
  description: "Yayasan Yuana Bhakti Nusantara (YBN) merupakan wadah sosial yang menaungi Indonesia Youth Movement (IYM). Fokus pada pendidikan, kesehatan, lingkungan, ekonomi kreatif, dan kesetaraan di nusantara.",
  keywords: [
    "IYM", 
    "Indonesia Youth Movement", 
    "Yayasan Yuana Bhakti Nusantara", 
    "YBN", 
    "Relawan Sosial", 
    "Volunteer Indonesia", 
    "Pendidikan", 
    "Kesehatan", 
    "Lingkungan",
    "Donasi",
    "Bhakti Nusantara"
  ],
  authors: [{ name: "Indonesia Youth Movement" }],
  creator: "Yayasan Yuana Bhakti Nusantara",
  publisher: "Yayasan Yuana Bhakti Nusantara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Yayasan Yuana Bhakti Nusantara | Indonesia Youth Movement",
    description: "Merajut Asa di Setiap Sudut Nusantara. Bergabunglah bersama kami membangun desa dan kelompok masyarakat agar lebih baik.",
    url: "https://yayasaniym.org", // You can change this to your real domain later
    siteName: "Yayasan Yuana Bhakti Nusantara",
    images: [
      {
        url: "/asset/pangandaran.jpg", // Automatically pointing to the public folder
        width: 1200,
        height: 630,
        alt: "Aktivitas Indonesia Youth Movement di Pangandaran",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayasan Yuana Bhakti Nusantara",
    description: "Mari turut serta berkontribusi untuk pendidikan, kesehatan, lingkungan, ekonomi kreatif dan kesetaraan.",
    images: ["/asset/pangandaran.jpg"],
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
    <html
      lang="id"
      className={`${inter.variable} ${merriweather.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
