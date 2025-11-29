import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "./components/MotionProvider";

// Removed Lenis SmoothScroll - it was hijacking native scroll events and causing heavy/sticky wheel scrolling.
// Native CSS scroll-behavior: smooth provides smooth scrolling without intercepting wheel events.

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jukely - The fully compliant digital jukebox platform",
  description:
    "Connect your Spotify, let guests request songs, and control everything from a simple tablet — legally and effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
