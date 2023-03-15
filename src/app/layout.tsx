import FooterElement from "@/components/FooterElement";
import NavBar from "@/components/NavBar";
import "@/styles/global.css";

export const metadata = {
  title: "Together Pay",
  description: "Create a group to track expenses together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <FooterElement />
      </body>
    </html>
  );
}
