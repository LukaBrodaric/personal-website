import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Navigation from "./components/layout/header"; // Dodaj putanju gdje si kreirao Navigation komponentu



const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luka Brodarič | Digital Growth Specialist",
    template: "%s | Luka Brodarič",
  },
  description: "Luka Brodarič - Digital marketing and web development specialist from Pula, Croatia. Building AI-powered solutions, conversion-focused websites, and data-driven marketing strategies. Portfolio and projects.",
  keywords: ["Luka Brodarič", "Luka Brodaric", "digital marketing specialist", "web developer Pula", "web development Croatia", "AI solutions", "SEO expert", "e-commerce", "digital growth", "Pula Croatia", "portfolio"],
  authors: [{ name: "Luka Brodarič" }],
  creator: "Luka Brodarič",
  publisher: "Luka Brodarič",
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
    title: "Luka Brodarič | Digital Growth Specialist",
    description: "Luka Brodarič - Digital marketing and web development specialist from Pula, Croatia. Building AI-powered solutions and data-driven marketing strategies.",
    url: "https://brodaric.xyz",
    siteName: "Luka Brodarič",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://brodaric.xyz",
    languages: {
      en: "https://brodaric.xyz",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luka Brodarič",
    url: "https://brodaric.xyz",
    jobTitle: "Digital Growth Specialist",
    nationality: "Croatian",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pula",
      addressCountry: "HR",
    },
    sameAs: [
      "https://linkedin.com/in/lukabrodaric",
      "https://github.com/lukabrodaric",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}