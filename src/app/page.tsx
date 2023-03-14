import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-red-500 ${inter.className}`}>
      <h1 className="text-red-50">Hello World</h1>
    </main>
  );
}
