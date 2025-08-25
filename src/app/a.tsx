import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Leonardo Luz",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased flex flex-col justify-between items-center h-screen w-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
