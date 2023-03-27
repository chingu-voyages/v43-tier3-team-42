import { FC } from "react";
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
    <div className="bg-white text-black w-full rounded capitalize py-5 px-3 md:px-6 flex items-start justify-between">
      <div>
        <Headline5>{type}</Headline5>
        <p className="text-sm">
          {memberName} has paid for {description}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-brand-700 font-semibold">
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
