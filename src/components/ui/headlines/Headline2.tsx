import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Headline2Props {
  children: ReactNode;
  className?: string;
}

export default function Headline2({ children, className }: Headline2Props) {
  return (
    <h2 className={cn(["text-3xl font-semibold md:text-4xl", className])}>
      {children}
    </h2>
  );
}
