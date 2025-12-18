import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Roo Filmz | Premium Video Production & Digital Content",
  description: "Roo Filmz is a premium video production company specializing in cinematic storytelling, digital content, and creative media solutions.",
  keywords: "video production, cinematography, digital content, Roo Filmz, Australia, creative agency",
  icons: {
    icon: "/roofilmz/assets/logo.webp",
    shortcut: "/roofilmz/assets/logo.webp",
    apple: "/roofilmz/assets/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
