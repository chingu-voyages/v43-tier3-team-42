import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Headline5Props {
  children: ReactNode;
  className?: string;
}

export default function Headline5({ children, className }: Headline5Props) {
  return (
    <h5 className={cn(["text-xl font-semibold", className])}>{children}</h5>
  );
}
