import Button from "@/components/ui/Button";
import Headline2 from "@/components/ui/headlines/Headline2";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface PageProps {
  params: { id: string };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <>
      <div className="md:mt-20 md:h-1/2 bg-navy-800 text-navy-50 flex flex-col justify-center items-center">
        <Headline2 className="text-navy-50 pt-10 uppercase tracking-widest">
          california trip
        </Headline2>
        <p className="mt-6 text-base">
          Transactions: <strong>23</strong>
        </p>
        <p className="text-base">
          Members: <strong>6</strong>
        </p>
        <p className="text-base text-brand-700">
          Total due: <strong>$57.21</strong>
        </p>
        <Button className="mt-6">
          <Plus className="h-4 w-4" /> new expense
        </Button>
        <div className="mt-6 gap-4 text-xs md:text-base md:w-2/6 py-1 flex items-start justify-between">
          <Link href={`/togetherpay/${params.id}`}>Transactions</Link>
          <Link href={`/togetherpay/${params.id}/debt`}>Debt</Link>
          <p className="border-b-2 border-b-navy-50 pb-2">Members</p>
          <Link href={`/togetherpay/${params.id}/recent`}>Recent activity</Link>
        </div>
      </div>
      <div>Page</div>
    </>
  );
};

export default Page;
