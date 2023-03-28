import { Menu, User } from "lucide-react";
import type { FC } from "react";
import Headline4 from "./ui/headlines/Headline4";

const NavBar: FC = () => {
  return (
    <nav className="mb-5 flex w-full items-center justify-between bg-gray-50 py-5 px-12 md:absolute md:top-0">
      <Menu className="h-5 w-5" />
      <Headline4>TogetherPay</Headline4>
      <User className="h-5 w-5" />
    </nav>
  );
};

export default NavBar;
