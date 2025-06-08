import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Upscle - Image Upscaler",
  description: "Upscale high-quality images with waifu2x technology",
  openGraph: {
    title: "Upscle - Image Upscaler",
    description: "Upscale high-quality images with waifu2x technology",
    images: [
      {
        url: "/logow.png", // ganti dengan thumbnail kamu
        width: 1024,
        height: 1024,
      },
    ],
  },
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
        {children}
      </body>
    </html>
  );
}
