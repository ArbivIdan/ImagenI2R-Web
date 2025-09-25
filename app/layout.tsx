import React from 'react';
import "./globals.css";
import { poppins } from "../utils/fonts";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Diffusion Model for Regular Time Series Generation from Irregular Data with Completion and Masking',
  description: 'Research paper on generating realistic time series from irregular data using Time Series Transformers and vision-based diffusion models',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={poppins.className}>
        <main className="flex flex-col md:flex-row relative">
          <section className="md:w-7/12 flex flex-col">
            <LayoutWrapper>{children}</LayoutWrapper>
          </section>
        </main>
      </body>
    </html>
  );
}
