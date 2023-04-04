"use client";
import { UserMinus } from "lucide-react";
import { type FC } from "react";

interface MembersListProps {
  name: string;
  email: string;
  phone: string;
}

const MembersList: FC<MembersListProps> = (props) => {
  return (
    <div className="flex w-full items-center justify-between rounded bg-white px-4 py-2 text-navy-200">
      <p>{props.name}</p>
      <UserMinus
        className="h-4 w-4 hover:cursor-pointer"
        onClick={() => console.log("deleting")}
      />
    </div>
  );
};

export default MembersList;
