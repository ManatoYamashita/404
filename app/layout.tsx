import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import HeadMessages from "@/app/components/HeadMessages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "manapuraza.com - 404 Page not found and Bananas",
  description: "The page you are looking for does not exist. It might have been moved or deleted, btw do you learn about bananas?",
  keywords: ["manapuraza", "山下マナト", "バナナ", "404"],
  openGraph: {
    title: "manapuraza.com - 404 Page not found and Bananas",
    description: "The page you are looking for does not exist. It might have been moved or deleted, btw do you learn about bananas?",
    images: "/ogp.jpg",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    site: "@manapuraza",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="wrapper">
        <HeadMessages />
        <article className="article">
          {children} 
        </article> 
      </div>
      </body>
    </html>
  );
}
