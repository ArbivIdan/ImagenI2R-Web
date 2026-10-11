import React from 'react';
import "./globals.css";
import { poppins } from "../utils/fonts";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Irregular Time Series Generation | Fadlon, Arbiv, Azencot',
  description: 'Project pages for ImagenI2R (NeurIPS 2025) and Closing the Loop (NeurIPS 2026): diffusion models that generate regular time series from irregular data',
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
    <html lang="en">
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
