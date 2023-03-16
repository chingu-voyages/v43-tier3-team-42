import { ReactNode } from "react";

interface Headline5Props {
  children: ReactNode;
}

export default function Headline5({ children }: Headline5Props) {
  return <h5 className="text-xl font-semibold">{children}</h5>;
}
