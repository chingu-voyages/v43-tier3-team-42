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

const newExpense = z.object({
  // name: z.string().min(1, { message: "Expense is required" }),
  // currency: z.string(),
});

type Expenses = z.infer<typeof newExpense>;

const Expense: FC = () => {
  const { register, handleSubmit } = useForm<Expenses>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Expenses> = (data) => {
    try {
      newExpense.parse(data);
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
      <Headline4>Create a new expense</Headline4>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>

          <label className="block">Expense Amount</label>
          <input
            // {...register("name")}
            placeholder="0.00"
            className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
          />

          <label className="block">Title</label>
          <input
            // {...register("name")}
            placeholder="Enter expense title"
            className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
          />

          <label className="block">Date of Purchase</label>
          <input
            // {...register("name")}
            placeholder="mm/dd/yyyy"
            className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
          />

          <label className="block">Paid by:</label>
          <input
            // {...register("name")}
            placeholder="Full Name"
            className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
          />

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

export default Expense;
