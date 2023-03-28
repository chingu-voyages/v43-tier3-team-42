import type { ReactNode } from "react";

interface Headline4Props {
  children: ReactNode;
}

export default function Headline4({ children }: Headline4Props) {
  return <h4 className="text-xl font-semibold md:text-2xl">{children}</h4>;
}
