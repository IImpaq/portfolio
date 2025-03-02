import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Plausible from "@/components/common/Plausible";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marcus Gugacs",
  description: "Portfolio of Marcus Gugacs - Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Plausible
          domain={`${process.env.NEXT_PUBLIC_DOMAIN}`}
          plausibleHost={`${process.env.NEXT_PUBLIC_PLAUSIBLE_API}`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-bg)] relative min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
