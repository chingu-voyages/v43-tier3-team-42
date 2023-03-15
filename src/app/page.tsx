import Button from "@/components/ui/Button";
import Headline1 from "@/components/ui/headlines/Headline1";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="container flex justify-center h-screen items-center">
        <div className="flex flex-col max-w-[360px] gap-3">
          <Headline1>
            Welcome to <span className="text-amber-500">Together Pay</span>!
          </Headline1>
          <p className="font-semibold text-lg">
            Create a group and add expenses
          </p>
          <p className="text-base text-black">
            Whether you&apos;re splitting costs with your housemates, planning a
            trip with friends, or just sharing expenses with family, this app
            simplifies the process and keeps everyone on the same page. Say
            goodbye to messy spreadsheets - try our expense-sharing app today!
          </p>
          <div className="flex flex-row gap-16 mt-7">
            <Button variant="default">sign up</Button>
            <Button variant="dark">login</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
