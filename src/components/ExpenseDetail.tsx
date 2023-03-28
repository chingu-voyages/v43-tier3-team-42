import type { FC } from "react";
import Headline5 from "./ui/headlines/Headline5";

interface ExpenseDetailProps {
  type: string;
  total: number;
  memberName: string;
  description: string;
  date: string;
}

const ExpenseDetail: FC<ExpenseDetailProps> = ({
  type,
  total,
  memberName,
  description,
  date,
}) => {
  return (
    <div className="flex w-full items-start justify-between rounded bg-white py-5 px-3 capitalize text-black md:px-6">
      <div>
        <Headline5>{type}</Headline5>
        <p className="text-sm">
          {memberName} has paid for {description}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold text-brand-700">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)}
        </p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default ExpenseDetail;
