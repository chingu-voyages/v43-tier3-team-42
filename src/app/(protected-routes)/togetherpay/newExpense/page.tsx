/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import Button from "@/components/ui/Button";
import Headline4 from "@/components/ui/headlines/Headline4";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const newGroup = z.object({
  name: z.string().min(1, { message: "Group is required" }),
  currency: z.string(),
});

type Groups = z.infer<typeof newGroup>;

const Group: FC = () => {
  const { register, handleSubmit } = useForm<Groups>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Groups> = (data) => {
    try {
      newGroup.parse(data);
      router.replace("togetherpay/new/members");
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const issue of error.issues) {
          toast.error(issue.message);
        }
      }
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-3 p-5 md:mt-20 md:w-3/6 md:gap-5">
      <Headline4>Create a new group</Headline4>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block">Group name</label>
          <input
            {...register("name")}
            placeholder="Enter group name"
            className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
          />
          <label className="block">Please select your currency</label>
          <select
            {...register("currency")}
            className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 text-navy-100 focus:border-slate-200 focus:outline-none"
          >
            <option value={"USD"}>United States Dollar (USD)</option>
            <option value={"CAN"}>Canadian Dollar (CAN)</option>
            <option value={"MXP"}>Mexican Peso (MXP)</option>
            <option value={"CLP"}>Chlean Peso (CLP)</option>
          </select>
          <div className="flex justify-end">
            <Button variant={"dark"} className="px-10">
              Done &nbsp; <Check className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Group;
