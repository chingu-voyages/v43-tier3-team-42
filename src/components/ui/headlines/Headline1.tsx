import { ReactNode } from "react";

interface Headin1Props {
  children: ReactNode;
}

function Heading1({ children }: Headin1Props) {
  return (
    <h1 className="text-black text-4xl font-semibold md:text-5xl">
      {children}
    </h1>
  );
}

export default Heading1;
