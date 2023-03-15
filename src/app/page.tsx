import Button from "@/components/ui/Button";
import Headline1 from "@/components/ui/headlines/Headline1";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-col md:flex-row justify-center h-screen items-center w-screen px-3 md:px-52">
        <div className="flex flex-col w-1/2 gap-3">
          <Headline1>
            Welcome to <span className="text-amber-500">Together Pay</span>!
          </Headline1>
          <p className="font-semibold text-lg">
            Create a group and add expenses
          </p>
          <p className="text-base text-black text-justify">
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
        <Image
          src="/images/sapiens.svg"
          alt="sapiens image"
          className="md:w-1/2 h-auto"
          priority
          width={360}
          height={360}
        />
      </div>
    </main>
  );
}
