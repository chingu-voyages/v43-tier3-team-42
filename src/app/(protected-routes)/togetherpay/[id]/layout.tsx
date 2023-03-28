import Button from "@/components/ui/Button";
import Headline2 from "@/components/ui/headlines/Headline2";
import { Plus } from "lucide-react";
import type { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-navy-50">
      <div className="flex flex-col items-center justify-center bg-navy-800 text-navy-50 md:mt-16">
        <Headline2 className="pt-10 uppercase tracking-widest text-navy-50">
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
    </div>
  );
};

export default Layout;
