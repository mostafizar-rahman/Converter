// "use client"
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Common/Header/Header";
import Footer from "@/components/Common/Footer/Footer";
import CurrencyCodeProvider from "@/context/CurrencyCodeProvider/CurrencyCodeProvider";

export const metadata: Metadata = {
  title: "Currency Converter",
  description: "Currency Converter with nextJs, tailwind css, and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CurrencyCodeProvider>
          <Header />
          {children}
          <Footer />
        </CurrencyCodeProvider>
      </body>
    </html>
  );
}
