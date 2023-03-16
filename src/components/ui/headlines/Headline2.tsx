import { ReactNode } from "react";

interface Headline2Props {
  children: ReactNode;
}

export default function Headline2({ children }: Headline2Props) {
  return <h2 className="text-3xl font-semibold md:text-4xl">{children}</h2>;
}
