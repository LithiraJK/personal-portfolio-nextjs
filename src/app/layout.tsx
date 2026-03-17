import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lithira Jayanaka - Full-Stack Developer",
  description:
    "Personal portfolio of Lithira Jayanaka, a Full-Stack Developer specializing in MERN, Spring Boot, and React Native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <div className="min-h-screen bg-dots bg-radial-glow">
          <Navbar />
          <main className="min-h-screen overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}