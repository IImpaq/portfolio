import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/global.css";
import CookieNotice from "@/app/ui/common/CookieNotice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcus Gugacs | Portfolio",
  description: "Portfolio of Marcus Gugacs, a software developer specializing in computer graphics and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
