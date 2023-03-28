"use client";
import FooterElement from "@/components/FooterElement";
import NavBar from "@/components/NavBar";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <NavBar />
        {children}
        <FooterElement />
      </body>
    </html>
  );
}
