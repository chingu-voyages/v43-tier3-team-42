import Button from "@/components/ui/Button";
import Headline2 from "@/components/ui/headlines/Headline2";
import { Plus } from "lucide-react";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="md:mt-16 md:h-1/2 bg-navy-800 text-navy-50 flex flex-col justify-center items-center">
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
      </div>
      {children}
    </>
  );
};

export default Layout;
