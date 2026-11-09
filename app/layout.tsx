import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Кара-Кульский факультет КГТУ им. И. Раззакова",
  description: "Современный сайт Кара-Кульского технического института КГТУ имени И. Раззакова: образование, история, направления подготовки, абитуриентам и контакты.",
  openGraph: {
    title: "Кара-Кульский технический институт КГТУ им. И. Раззакова",
    description: "Образование, инженерия и профессиональное развитие в Кара-Куле.",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-slate-100 text-slate-900 dark:bg-[#08131f] dark:text-slate-100">{children}</body>
    </html>
  );
}
