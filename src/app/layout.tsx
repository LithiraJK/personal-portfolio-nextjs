import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import { personalInfo } from "@/lib/constants";
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
  metadataBase: new URL("https://lithira-jayanaka.vercel.app"),
  title: {
    default: "Lithira Jayanaka | Full-Stack Developer Portfolio",
    template: "%s | Lithira Jayanaka",
  },
  description:
    "Portfolio of Lithira Jayanaka, a Full-Stack Developer building scalable web and mobile apps with MERN, Spring Boot, and React Native.",
  keywords: [
    "Lithira Jayanaka",
    "Full-Stack Developer",
    "MERN Developer",
    "Spring Boot Developer",
    "React Native Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Lithira Jayanaka", url: "https://lithira-jayanaka.vercel.app" }],
  creator: "Lithira Jayanaka",
  publisher: "Lithira Jayanaka",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Lithira Jayanaka | Full-Stack Developer Portfolio",
    description:
      "Explore projects, skills, and experience of Lithira Jayanaka, a Full-Stack Developer focused on modern web and mobile applications.",
    siteName: "Lithira Jayanaka Portfolio",
    images: [
      {
        url: "/images/lithira-jayanaka.png",
        width: 1200,
        height: 630,
        alt: "Lithira Jayanaka portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lithira Jayanaka | Full-Stack Developer Portfolio",
    description:
      "Explore projects, skills, and experience of Lithira Jayanaka, a Full-Stack Developer focused on modern web and mobile applications.",
    images: ["/images/lithira-jayanaka.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: "https://lithira-jayanaka.vercel.app",
    image: "https://lithira-jayanaka.vercel.app/images/lithira-jayanaka.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Galle",
      addressCountry: "LK",
    },
    sameAs: [personalInfo.github, personalInfo.linkedin],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="min-h-screen bg-dots bg-radial-glow">
          <BackgroundEffects />
          <Navbar />
          <main className="min-h-screen overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}