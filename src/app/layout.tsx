import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luka Brodarič | Digital Growth Specialist",
  description: "Digital marketing and web development specialist from Pula, Croatia. Building AI-powered solutions, conversion-focused websites, and data-driven marketing strategies.",
  keywords: ["digital marketing", "web development", "AI solutions", "Pula Croatia", "SEO", "e-commerce"],
  authors: [{ name: "Luka Brodarič" }],
  openGraph: {
    title: "Luka Brodarič | Digital Growth Specialist",
    description: "Building modern digital solutions that drive real business results.",
    url: "https://tvojadomena.com",
    siteName: "Luka Brodarič Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
