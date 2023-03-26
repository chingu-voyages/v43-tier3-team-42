import Link from "next/link";
import { FC } from "react";

interface PageProps {
  params: { id: string };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <>
      <div className="bg-navy-800 text-navy-50 flex flex-col justify-center items-center">
        <div className="mt-6 gap-4 text-xs md:text-base md:w-2/6 py-1 flex items-start justify-between">
          <Link href={`/togetherpay/${params.id}`}>Transactions</Link>
          <Link href={`/togetherpay/${params.id}/debt`}>Debt</Link>
          <Link href={`/togetherpay/${params.id}/members`}>Members</Link>
          <p className="border-b-2 border-b-navy-50 pb-2">Recent activity</p>
        </div>
      </div>
      <div>Recent activity</div>
    </>
  );
};

export default Page;
