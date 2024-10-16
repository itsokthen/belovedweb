import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";

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
        <div className="mt-[var(--navHeightSM)]">
          <ImageSection />
        </div>
        <main className="flex-grow" style={{ marginTop: "var(--nav-height)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
