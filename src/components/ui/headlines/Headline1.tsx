import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Headin1Props {
  children: ReactNode;
  className?: string;
}

function Headline1({ children, className }: Headin1Props) {
  return (
    <h1
      className={cn([
        "text-black text-4xl font-semibold md:text-5xl",
        className,
      ])}
    >
      {children}
    </h1>
  );
}

export default Headline1;
