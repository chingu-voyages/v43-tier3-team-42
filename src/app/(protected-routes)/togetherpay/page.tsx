import ExpenseSummary from "@/components/ExpenseSummary";
import { FC } from "react";
import * as groups from "@/lib/groups.json";
import Link from "next/link";
import { Plus } from "lucide-react";

interface TogetherPayProps {}

const TogetherPay: FC<TogetherPayProps> = ({}) => {
  const displayGroups = groups.map((group) => {
    return (
      <>
        <ExpenseSummary
          key={group.id}
          name={group.name}
          total={group.total}
          id={group.id}
        />
      </>
    );
  });

  return (
    <div className="md:mt-20 flex flex-col gap-3 md:gap-5 justify-center items-center">
      <Link
        href="#"
        className="w-11/12 md:max-w-xl bg-white text-navy-900 border-navy-900 border-2 inline-flex gap-3 items-center justify-center uppercase py-5 px-9 rounded-xl"
      >
        <Plus className="h-4 w-4" /> <span>create new group</span>
      </Link>
      {displayGroups}
      <Link
        href="#"
        className="bg-brand-700 text-brand-50 font-semibold inline-flex gap-3 items-center justify-center uppercase py-2 px-4 rounded-full mt-7"
      >
        <Plus className="h-4 w-4" /> <span>new expense</span>
      </Link>
    </div>
  );
};

export default TogetherPay;
