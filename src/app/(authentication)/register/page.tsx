"use client";
/* eslint-disable @typescript-eslint/no-misused-promises */
import Button from "@/components/ui/Button";
import Headline4 from "@/components/ui/headlines/Headline4";
import { EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const registerInformation = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(9, { message: "Enter a valid phone number" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Enter a valid Email"),
  password: z.string().min(1, { message: "Password is required" }),
});

type RegisterType = z.infer<typeof registerInformation>;

const Register: FC = () => {
  const { register, handleSubmit } = useForm<RegisterType>();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    try {
      registerInformation.parse(data);
      router.replace("/togetherpay");
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const issue of error.issues) {
          toast.error(issue.message);
        }
      }
    }
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center px-3 md:h-screen md:flex-row md:px-52">
      <div className="flex w-screen flex-col items-center justify-center gap-9 px-3 md:h-screen md:px-52">
        <Headline4>Sign up to create an account</Headline4>

        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <input
                {...register("name")}
                placeholder="Full Name"
                className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
              />
              <User className="absolute top-[11px] left-3 h-5 w-5 text-navy-200" />
            </div>

            <div className="relative">
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
              />
              <Phone className="absolute top-[11px] left-3 h-5 w-5 text-navy-200" />
            </div>

            <div className="relative">
              <input
                {...register("email")}
                placeholder="Email address"
                className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
              />
              <Mail className="absolute top-[11px] left-3 h-5 w-5 text-navy-200" />
            </div>

            <div className="relative">
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
              />
              <Lock className="absolute top-[11px] left-3 h-5 w-5 text-navy-200" />
              <EyeOff className="absolute top-[11px] right-3 h-5 w-5 text-navy-200" />
            </div>

            <Button type="submit" className="my-8 w-full">
              sign up
            </Button>

            <p className="my-8 text-center text-sm text-navy-200 md:text-base">
              Have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-700 hover:underline"
              >
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
