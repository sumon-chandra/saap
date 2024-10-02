"use client";

import InputBox from "../../../app/(auth)/components/InputBox";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { handleRegistration, socialLogin } from "../_actions/authActions";

// import { useRouter } from "next/navigation"
import { useRouter } from "next-nprogress-bar"; // This useRouter will helps us to display the progress bar on the top.
import AuthButton from "../components/auth-button";
import { toast } from "sonner";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiPasswordBold, PiSpinnerLight, PiUserBold } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialBtnLoading, setIsSocialBtnLoading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const response = await handleRegistration(data, setIsLoading);
    if (response?.status !== 200) {
      toast.error("Registration failed, please try again!");
      return;
    }
    toast.success("Registration successful, you can now login!");
    reset();
    router.push("/");
  };

  const handleSocialLogin = async (action: string) => {
    const response = await socialLogin(action, setIsSocialBtnLoading);
    if (response?.error) {
      toast.error("Something went wrong, Try Again!");
      return;
    }
    toast.success("Logged in successfully");
    router.push("/");
  };

  return (
    <div className="w-[25rem] mx-auto dark:bg-saap-bg-dark-secondary p-4 border border-saap-primary shadow shadow-secondary-100 rounded-md">
      <div className="text-center font-bold text-saap-text-primary dark:text-saap-text-dark-primary">
        <div className="text-xl">
          Signup to <span className="text-saap-primary">Saap.</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
        <InputBox
          label="Name"
          type="text"
          register={register}
          placeholder="Enter name..."
          Icon={PiUserBold}
          name="name"
        />
        <InputBox
          label="Email"
          register={register}
          type="email"
          placeholder="Enter email..."
          Icon={HiOutlineMailOpen}
          name="email"
        />
        <InputBox
          label="Password"
          register={register}
          type="password"
          placeholder="Enter password..."
          Icon={PiPasswordBold}
          name="password"
        />

        <AuthButton isLoading={isLoading || status === "loading"}>
          {isLoading && <PiSpinnerLight size={18} className="animate-spin" />}
          <span>Signup</span>
        </AuthButton>
      </form>
      <div className="mt-4">
        <AuthButton
          socialBtn
          isLoading={isLoading || status === "loading"}
          onClick={() => handleSocialLogin("google")}
        >
          {isSocialBtnLoading && <PiSpinnerLight size={18} className="animate-spin" />}
          <FaGoogle size={14} />
          <span>Continue with Google</span>
        </AuthButton>
      </div>
      <div className="flex justify-center gap-2 px-2 mt-4 text-xs text-gray-500">
        <div>Already have an account?</div>
        <div
          onClick={() => router.push("/login")}
          className="font-semibold text-saap-text-secondary dark:text-saap-text-dark-secondary underline cursor-pointer"
        >
          Please Login
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
