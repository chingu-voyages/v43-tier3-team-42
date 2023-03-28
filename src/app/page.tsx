import Headline1 from "@/components/ui/headlines/Headline1";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Together Pay",
  description: "Create a group to track expenses together",
};

export default function Home() {
  return (
    <main className="bg-white">
      <div className="flex w-screen flex-col items-center justify-center px-3 md:h-screen md:flex-row md:px-52">
        <div className="flex flex-col gap-3 px-5 md:w-1/2">
          <Headline1>
            Welcome to <span className="text-amber-500">Together Pay</span>!
          </Headline1>
          <p className="text-lg font-semibold">
            Create a group and add expenses
          </p>
          <p className="text-justify text-base text-black">
            Whether you&apos;re splitting costs with your housemates, planning a
            trip with friends, or just sharing expenses with family, this app
            simplifies the process and keeps everyone on the same page. Say
            goodbye to messy spreadsheets - try our expense-sharing app today!
          </p>
          <div className="mt-7 flex flex-row gap-16">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 py-2 px-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-amber-300 active:scale-95"
            >
              sign up
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 py-2 px-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-neutral-700 active:scale-95"
            >
              login
            </Link>
          </div>
        </div>
        <Image
          src="/images/sapiens.svg"
          alt="sapiens image"
          className="h-auto md:w-1/2"
          priority
          width={360}
          height={360}
        />
      </div>
    </main>
  );
}
