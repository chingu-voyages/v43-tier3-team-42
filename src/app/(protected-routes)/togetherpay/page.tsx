import ExpenseSummary from "@/components/ExpenseSummary";
import type { FC } from "react";
import groups from "@/lib/groups";
import Link from "next/link";
import { Plus } from "lucide-react";

const TogetherPay: FC = () => {
  const displayGroups = groups.map((group) => {
    return (
      <ExpenseSummary
        key={group.id}
        name={group.name}
        total={group.totalSpent}
        id={group.id}
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-3 md:mt-20 md:gap-5">
      <Link
        href="/togetherpay/group"
        className="inline-flex w-11/12 items-center justify-center gap-3 rounded-xl border-2 border-navy-900 bg-white py-5 px-9 uppercase text-navy-900 md:max-w-xl"
      >
        <Plus className="h-4 w-4" /> <span>create new group</span>
      </Link>
      {displayGroups}
      <Link
        href="/togetherpay/expense"
        className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-brand-700 py-2 px-4 font-semibold uppercase text-brand-50"
      >
        <Plus className="h-4 w-4" /> <span>new expense</span>
      </Link>
    </div>
  );
};

export default TogetherPay;
