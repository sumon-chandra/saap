import axios from "axios";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { FieldValues, UseFormReset } from "react-hook-form";
import { toast } from "sonner";

interface SocialLoginProps {
    action: string;
    handleLoading: (isLogin: boolean) => void;
}

interface RegistrationProps {
    data: FieldValues,
    reset: UseFormReset<FieldValues>
    handleLoading: (isLogin: boolean) => void;
}



export const socialLogin = ({ action, handleLoading }: SocialLoginProps) => {
    handleLoading(true)
    const response = signIn(action, { redirect: false })
        .then((response) => {
            if (response?.error) {
                toast.error("Something went wrong, Try Again!");
            }
            if (response?.ok) {
                toast.success("Logged in successfully");
                redirect("/")
            }
        })
        .catch(() => {
            toast.error("Something went wrong, Please try again")
        })
    return response;
}

export const handleRegistration = ({ data, reset, handleLoading }: RegistrationProps) => {
    const response = axios.post("/api/register", data)
        .then(async (response) => {
            toast.success(`Welcome ${response?.data?.name} !!`)
            reset()
            const signInResponse = await signIn("credentials", data)
            console.log(signInResponse);
        })
        .catch((error: any) => {
            console.log("Registration error :", error);
            if (error?.response?.data !== "") {
                toast.error(error?.response?.data)
            } else {
                toast.error("Registration failed!!")
            }
            handleLoading(false);
        })
        .finally(() => handleLoading(false));
    return response
}

export const handleLogin = ({ data, reset, handleLoading }: RegistrationProps) => {
    signIn("credentials", { ...data, redirect: false })
        .then((response) => {
            if (response?.error) {
                toast.error("Login failed!! Please try again.")
                handleLoading(false)
            }
            if (response?.ok) {
                toast.success("Login successful!")
                reset()
            }
        })
        .catch(() => {
            toast.error("Login failed!! Please try again.")
            handleLoading(false)
        })
        .finally(() => handleLoading(false));
}