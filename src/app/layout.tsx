import FooterElement from "@/components/FooterElement";
import NavBar from "@/components/NavBar";
import "@/styles/global.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Together Pay",
  description: "Create a group to track expenses together",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <FooterElement />
      </body>
    </html>
  );
}
