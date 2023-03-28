"use client";
import Button from "@/components/ui/Button";
import Headline4 from "@/components/ui/headlines/Headline4";
import { EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const loginInformation = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid Email"),
  password: z.string().min(1, { message: "Password is required" }),
});

type Inputs = z.infer<typeof loginInformation>;

const Login: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      const credentials = loginInformation.parse(data);

      if (credentials.email === "test@test.com") {
        router.replace("/togetherpay");
        return;
      }
      toast.error("Invalid credentials");
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (let issue in error.issues) {
          toast.error(error.issues[issue].message);
        }
      }
    }
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-9 px-3 md:h-screen md:px-52">
      <Headline4>Login</Headline4>
      <div className="w-5/6 md:w-3/6">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <p className="my-8 cursor-pointer text-center font-semibold text-blue-700 hover:underline">
            Forgot your password
          </p>
          <Button type="submit" className="w-full">
            login
          </Button>
          <p className="my-8 text-center text-sm text-navy-200 md:text-base">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-700 hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
