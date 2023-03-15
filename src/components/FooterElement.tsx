import Link from "next/link";
import { FC } from "react";

const FooterElement: FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-500 flex justify-between py-5 px-14 absolute bottom-0 w-full">
      <div className="flex gap-9">
        <Link href="#">About</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
      </div>
      <p>TogetherPay v1.0.0</p>
    </footer>
  );
};

export default FooterElement;
