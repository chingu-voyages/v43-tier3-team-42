import Link from "next/link";
import { FC } from "react";

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
      href="#"
      className="w-11/12 md:max-w-xl bg-navy-600 text-navy-50 inline-flex justify-between py-5 px-9 rounded-xl"
    >
      <span className="capitalize">{name}</span>
      <span className={totalSpanClassName}>{total === 0 ? "PAID" : total}</span>
    </Link>
  );
};

export default ExpenseSummary;
