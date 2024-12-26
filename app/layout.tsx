import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import HeadMessages from "@/app/components/HeadMessages";
import { getFullUrl } from "@/app/utils/getFullUrl";

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
    images: [
      {
        url: `https://manapuraza.com${process.env.NEXT_PUBLIC_BASE_PATH}/image/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: "manapuraza.com - 404 Page not found and Bananas",
      }
    ],
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@manapuraza",
    images: [`https://manapuraza.com${process.env.NEXT_PUBLIC_BASE_PATH}/image/ogp.jpg`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'manapuraza.com - 404 Page not found and Bananas',
  description: 'The page you are looking for does not exist. It might have been moved or deleted, btw do you learn about bananas?',
  image: getFullUrl('image/ogp.jpg'),
  url: `https://manapuraza.com${process.env.NEXT_PUBLIC_BASE_PATH}`,
  author: {
    '@type': 'Person',
    name: 'Manato Yamashita',
    url: 'https://manapuraza.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'manapuraza',
    logo: {
      '@type': 'ImageObject',
      url: getFullUrl('image/ogp.jpg')
    }
  },
  mainEntity: {
    '@type': 'Article',
    headline: 'Bananas Information',
    image: getFullUrl('image/ogp.jpg'),
    author: {
      '@type': 'Person',
      name: 'Manato Yamashita'
    },
    publisher: {
      '@type': 'Organization',
      name: 'manapuraza',
      logo: {
        '@type': 'ImageObject',
        url: getFullUrl('image/ogp.jpg')
      }
    },
    datePublished: '2024-12-26',
    dateModified: '2024-12-26'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="wrapper">
        <HeadMessages />
        <article className="article">
          {children} 
        </article> 
      </div>
      <footer>©︎2024 <a href="https://manapuraza.com" aria-label="山下マナト">ManatoYamashita / manapuraza.com</a></footer>
      </body>
    </html>
  );
}
