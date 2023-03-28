import { Search } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import expenses from "@/lib/expenses";
import ExpenseDetail from "@/components/ExpenseDetail";

interface PageProps {
  params: { id: string };
}

const Page: FC<PageProps> = ({ params }) => {
  const displayData = expenses.map((expense) => {
    return (
      <ExpenseDetail
        key={expense.id}
        type={expense.type}
        total={expense.total}
        memberName={expense.member.name}
        description={expense.description}
        date={expense.date}
      />
    );
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-navy-800 text-navy-50">
        <div className="mt-6 flex items-start justify-between gap-4 py-1 text-xs md:w-2/6 md:text-base">
          <p className="border-b-2 border-b-navy-50 pb-2">Transactions</p>
          <Link href={`/togetherpay/${params.id}/debt`}>Debt</Link>
          <Link href={`/togetherpay/${params.id}/members`}>Members</Link>
          <Link href={`/togetherpay/${params.id}/recent`}>Recent activity</Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-7 bg-navy-50 px-4">
        <div className="mt-5 flex w-full items-center gap-3 border-b-2 border-navy-200 pb-1 text-navy-200 md:w-4/12">
          <Search className="h-4 w-4" />
          <input
            type={"text"}
            placeholder={"Search transactions"}
            className="w-full bg-navy-50"
          />
        </div>
        <div className="mb-5 flex w-full flex-col items-center justify-center gap-3 md:w-4/12">
          {displayData}
        </div>
      </div>
    </div>
  );
};

export default Page;
