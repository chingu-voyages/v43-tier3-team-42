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
          <p className="border-b-2 border-b-navy-50 pb-2">Members</p>
          <Link href={`/togetherpay/${params.id}/recent`}>Recent activity</Link>
        </div>
      </div>
      <div>Members</div>
    </>
  );
};

export default Page;
