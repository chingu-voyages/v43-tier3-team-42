import Link from "next/link";
import type { FC } from "react";

const FooterElement: FC = () => {
  return (
    <footer className="mt-20 flex w-full justify-between bg-gray-100 py-5 px-14 text-xs text-gray-500 md:absolute md:bottom-0 md:text-sm">
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
