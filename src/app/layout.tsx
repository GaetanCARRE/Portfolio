import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaëtan Carré — Developer & DevNetOps Engineer",
  description:
    "Gaëtan Carré's portfolio — Developer and DevNetOps Engineer based in Paris. Specialized in Python, Go, infrastructure and automation.",
  keywords: [
    "Gaëtan Carré",
    "Developer",
    "DevNetOps",
    "Python",
    "Go",
    "Portfolio",
    "Paris",
    "Cybersecurity",
  ],
  openGraph: {
    title: "Gaëtan Carré — Developer & DevNetOps Engineer",
    description:
      "Developer and DevNetOps Engineer based in Paris. Specialized in Python, Go, infrastructure and automation.",
    type: "website",
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
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
