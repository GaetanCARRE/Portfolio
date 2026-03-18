import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Gaëtan Carré",
  },
  description: siteConfig.description,
  keywords: [
    "Gaëtan Carré",
    "Software Engineer Infrastructure",
    "DevNetOps",
    "Python",
    "Go",
    "TypeScript",
    "Portfolio",
    "Paris",
    "Cybersecurity",
    "Automation",
    "Infrastructure",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Gaëtan Carré portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
