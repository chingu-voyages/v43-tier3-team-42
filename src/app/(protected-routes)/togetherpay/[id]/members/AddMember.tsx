/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import Button from "@/components/ui/Button";
import Headline5 from "@/components/ui/headlines/Headline5";
import { Mail, Phone, User, UserPlus } from "lucide-react";
import { useState, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const contactInformation = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Enter a valid email"),
  phone: z.string().min(7, { message: "Enter a valid phone number" }),
});
type ContactType = z.infer<typeof contactInformation>;

const Modal: FC<ModalProps> = (props) => {
  const { handleSubmit, register } = useForm<ContactType>();

  const onSubmit: SubmitHandler<ContactType> = (data) => {
    try {
      contactInformation.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const issue of error.issues) {
          toast.error(issue.message);
        }
      }
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:fixed md:inset-0">
      <div className="relative h-full w-full max-w-md md:h-auto">
        <div className="relative rounded-lg bg-white py-3 shadow">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => props.setShowModal(false)}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <Headline5 className="pl-4 capitalize">add new contact</Headline5>
          </div>
          <div className="px-4 py-5">
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
                  {...register("email")}
                  placeholder="Email address"
                  className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
                />
                <Mail className="absolute top-[11px] left-3 h-5 w-5 text-navy-200" />
              </div>

              <div className="relative">
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="mb-5 block w-full rounded-md border border-navy-100 px-10 py-2 focus:border-slate-200 focus:outline-none"
                />
                <Phone className="absolute top-[11px] left-3 h-5 w-5 text-navy-200" />
              </div>

              <Button className="w-full">
                <UserPlus className="mr-4 h-4 w-4" /> add new member
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddMember: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <Button
        variant={"green"}
        className="w-full"
        onClick={() => setShowModal(true)}
        disabled={showModal}
      >
        <UserPlus className="mr-2 h-4 w-4" /> add new member
      </Button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default AddMember;
