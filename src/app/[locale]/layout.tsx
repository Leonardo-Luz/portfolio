import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google';
import "../globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";

import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import { notFound } from 'next/navigation';
import en from '@/messages/en.json';
import pt from '@/messages/pt.json';
import { Providers } from "./providers";

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Leonardo Luz",
  description: "My Portfolio",
};

const messagesMap: Record<string, any> = { en, pt };

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const messages = messagesMap[(await params).locale];
  if (!messages) notFound();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} antialiased flex flex-col justify-between items-center min-h-screen w-screen`}
      >
        <NextIntlClientProvider locale={(await params).locale} messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

