import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home • Max",
  description: "HBO Max Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="./favicon.ico" />
      </Head>
      <body
        className={`flex flex-col min-h-screen ${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <Header />
        <main className="px-4 sm:px-6 lg:px-8 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
