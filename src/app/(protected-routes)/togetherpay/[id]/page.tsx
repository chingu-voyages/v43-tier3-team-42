import { Search } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import * as expenses from "@/lib/expenses.json";
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
      <div className="bg-navy-800 text-navy-50 flex flex-col justify-center items-center">
        <div className="mt-6 gap-4 text-xs md:text-base md:w-2/6 py-1 flex items-start justify-between">
          <p className="border-b-2 border-b-navy-50 pb-2">Transactions</p>
          <Link href={`/togetherpay/${params.id}/debt`}>Debt</Link>
          <Link href={`/togetherpay/${params.id}/members`}>Members</Link>
          <Link href={`/togetherpay/${params.id}/recent`}>Recent activity</Link>
        </div>
      </div>
      <div className="bg-navy-50 w-full px-4 flex flex-col items-center gap-7 justify-center">
        <div className="mt-5 text-navy-200 w-full md:w-4/12 border-b-2 border-navy-200 pb-1 flex items-center gap-3">
          <Search className="w-4 h-4" />
          <input
            type={"text"}
            placeholder={"Search transactions"}
            className="bg-navy-50 w-full"
          />
        </div>
        <div className="mb-5 flex flex-col gap-3 justify-center items-center w-full md:w-4/12">
          {displayData}
        </div>
      </div>
    </div>
  );
};

export default Page;
