"use client";

import InputBox from "../../../app/(auth)/components/InputBox";
import SocialAuthButton from "../../../app/(auth)/components/SocialAuthButton";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation'
import { useRouter } from "next-nprogress-bar"; // This useRouter will helps us to display the progress bar on the top.
import { handleLogin, socialLogin } from "../_actions/authActions";
import AuthButton from "../components/auth-button";

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
    <div className="w-[25rem] mx-auto dark:bg-saap-bg-dark-secondary p-4 border border-saap-primary shadow shadow-secondary-100 rounded-md">
      <div className="text-center font-bold text-saap-text-primary dark:text-saap-text-dark-primary">
        <div className="text-xl ">
          Welcome back to <span className="text-saap-primary">Saap.</span>
        </div>
        <p className="text-saap-text-secondary dark:text-saap-text-dark-secondary">
          Login to Saap.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
        <InputBox
          label="Email"
          register={register}
          errors={errors}
          id="email"
          type="email"
          placeholder="Enter email ..."
        />
        <InputBox
          label="Password"
          register={register}
          errors={errors}
          id="password"
          type="password"
          placeholder="Enter password..."
        />

        <AuthButton isLoading={isLoading} variant="Login" />
      </form>
      <div className="mt-5 space-y-2">
        <SocialAuthButton
          onClick={() => handleSocialLogin("google")}
          disabled={isLoading || status === "loading"}
          isLoading={isSocialBtnLoading}
        />
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
