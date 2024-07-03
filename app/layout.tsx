import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anders Lundbäck",
  description: "Portfolio website for product leader, Anders Lundback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="px-10">{children}</main>
      </body>
    </html>
  );
}
