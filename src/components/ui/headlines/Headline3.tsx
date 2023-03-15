import { ReactNode } from "react";

interface Headline3Props {
  children: ReactNode;
}

export default function Headline3({ children }: Headline3Props) {
  return <h3 className="text-2xl font-semibold md:text-3xl">{children}</h3>;
}
