import { Menu, User } from "lucide-react";
import { FC } from "react";
import Headline4 from "./ui/headlines/Headline4";

const NavBar: FC = () => {
  return (
    <nav className="flex justify-between py-5 px-12 bg-gray-50 items-center md:absolute md:top-0 w-full mb-5">
      <Menu className="h-5 w-5" />
      <Headline4>TogetherPay</Headline4>
      <User className="h-5 w-5" />
    </nav>
  );
};

export default NavBar;
