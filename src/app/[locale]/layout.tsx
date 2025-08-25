import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google';
import "../globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";

import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import { notFound } from 'next/navigation';
import en from '@/messages/en.json';
import pt from '@/messages/pt_br.json';

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Leonardo Luz",
  description: "My Portfolio",
};

const messagesMap: Record<string, any> = { en, pt };

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = messagesMap[locale];
  if (!messages) notFound();

  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased flex flex-col justify-between items-center h-screen w-screen`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

