"use client";

import InputBox from "../../../app/(auth)/components/InputBox";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar"; // This useRouter will helps us to display the progress bar on the top.
import { handleLogin, socialLogin } from "../_actions/authActions";
import AuthButton from "../components/auth-button";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiPasswordBold, PiSpinnerLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
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
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const response = await handleLogin(data, setIsLoading);

    if (response?.error) {
      toast.error("Something went wrong, Try Again!");
      return;
    }

    toast.success("Logged in successfully");
    reset();
    router.push("/");
  };

  const handleSocialLogin = async (action: string) => {
    const response = await socialLogin(action, setIsSocialBtnLoading);

    if (response?.error) {
      toast.error("Something went wrong, Try Again!");
      return;
    }

    if (response?.ok) {
      toast.success("Logged in successfully");
      router.push("/");
    }
  };

  return (
    <div className="w-[25rem] mx-auto dark:bg-saap-bg-dark-secondary bg-saap-bg-primary p-4 border border-saap-primary shadow-lg rounded-md">
      <div className="text-center font-bold text-saap-text-primary dark:text-saap-text-dark-primary">
        <div className="text-xl">
          Login to <span className="text-saap-primary">Saap.</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
        <InputBox
          label="Email"
          register={register}
          type="email"
          placeholder="Enter email ..."
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
          <span>Login</span>
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
        <div>New to SAAP?</div>
        <div
          onClick={() => router.push("/signup")}
          className="font-semibold text-saap-text-secondary dark:text-saap-text-dark-secondary underline cursor-pointer"
        >
          Create an account
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
