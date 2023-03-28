import Link from "next/link";
import type { FC } from "react";

interface ExpenseSummaryProps {
  id: string;
  name: string;
  total: number;
}

const ExpenseSummary: FC<ExpenseSummaryProps> = ({ id, name, total }) => {
  let totalSpanClassName = "";
  if (total < 0) totalSpanClassName = "text-brand-700";
  else if (total === 0) totalSpanClassName = "text-green-400";
  else totalSpanClassName = "text-spring-green-300";

  return (
    <Link
      href={`/togetherpay/${id}`}
      className="inline-flex w-11/12 justify-between rounded-xl bg-navy-600 py-5 px-9 text-navy-50 md:max-w-xl"
    >
      <span className="capitalize">{name}</span>
      <span className={totalSpanClassName}>{total === 0 ? "PAID" : total}</span>
    </Link>
  );
};

export default ExpenseSummary;
