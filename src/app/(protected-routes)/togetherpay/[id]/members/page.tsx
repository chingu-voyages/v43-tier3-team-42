import MembersList from "@/components/MembersList";
import members from "@/lib/members";
import Link from "next/link";
import type { FC } from "react";
import AddMember from "./AddMember";

interface PageProps {
  params: { id: string };
}

const Page: FC<PageProps> = ({ params }) => {
  const membersDisplay = members.map((member) => (
    <MembersList key={member.id} {...member} />
  ));

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-navy-800 text-navy-50">
        <div className="mt-6 flex items-start justify-between gap-4 py-1 text-xs md:w-2/6 md:text-base">
          <Link href={`/togetherpay/${params.id}`}>Transactions</Link>
          <Link href={`/togetherpay/${params.id}/debt`}>Debt</Link>
          <p className="border-b-2 border-b-navy-50 pb-2">Members</p>
          <Link href={`/togetherpay/${params.id}/recent`}>Recent activity</Link>
        </div>
      </div>
      <div className="mx-auto mt-6 flex flex-col gap-4 px-5 text-xs md:w-2/6 md:text-sm">
        <AddMember />
        <p>Members ({members.length})</p>
        {membersDisplay}
      </div>
    </>
  );
};

export default Page;
