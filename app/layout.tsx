import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png"
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Padakhep Manabik Unnayan Kendra",
  description: "Padakhep Manabik Unnayan Kendra",
    icons: {
        icon: "/images/logo.png",
    }
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 h-30 flex items-center justify-between shadow-lg px-30">
          <span className="flex gap-6 text-transform: uppercase">
              <Link href="/">Home</Link>
              <Link href="/">Who We Are</Link>
              <Link href="/">What We Do</Link>
              <Link href="/">Projects</Link>
          </span>
          <span>
              <Link href="/"> <Image src={Logo} alt="Logo" height={110} width={110}/> </Link>
          </span>
          <span className="flex gap-6 text-transform: uppercase">
              <Link href="/">Publication</Link>
              <Link href="/">Enterprise</Link>
              <Link href="/">Career</Link>
              <Link href="/">Contact</Link>
          </span>
      </nav>
      {children}
      <Footer />
      </body>
    </html>
  );
}
