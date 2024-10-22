import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "BEloved",
  description: "BEloved Pet Legends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <div className="mt-[var(--navHeightSM)] lg:mt-[var(--navHeightLG)]">
          <ImageSection />
        </div>
        <main className="flex-grow flex justify-center">
          <div className="w-full max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1200px]">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
