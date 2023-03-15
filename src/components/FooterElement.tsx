import Link from "next/link";
import { FC } from "react";

const FooterElement: FC = () => {
  return (
    <footer className="text-xs bg-gray-100 text-gray-500 md:text-sm flex justify-between py-5 px-14 md:absolute md:bottom-0 w-full mt-20">
      <div className="flex gap-3 md:gap-9">
        <Link href="#">About</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
      </div>
      <p>TogetherPay v1.0.0</p>
    </footer>
  );
};

export default FooterElement;
