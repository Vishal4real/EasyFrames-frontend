import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: "EasyFrames - Premium Frames for Your Favorite Art",
    template: "%s | EasyFrames"
  },
  description: "Transform your space with our curated collection of high-quality frames. Perfect for Marvel, Anime, Home Decor and more. Premium quality frames for your favorite artwork and memories.",
  keywords: ["frames", "picture frames", "art frames", "premium frames", "modern frames", "classic frames", "home decor"],
  authors: [{ name: "EasyFrames" }],
  creator: "EasyFrames",
  publisher: "EasyFrames",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://easyframes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "EasyFrames - Premium Frames for Your Favorite Art",
    description: "Transform your space with our curated collection of high-quality frames. Perfect for Marvel, Anime, Home Decor and more.",
    siteName: 'EasyFrames',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EasyFrames - Premium Frames for Your Favorite Art",
    description: "Transform your space with our curated collection of high-quality frames.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
