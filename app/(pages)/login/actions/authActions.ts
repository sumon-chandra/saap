import axios from "axios";
import { signIn } from "next-auth/react";
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
    try {
        handleLoading(true)
        signIn(action, { redirect: false })
            .then((response) => {
                if (response?.error) {
                    toast.error("Something went wrong, Try Again!");
                }
                if (response?.ok) {
                    toast.success("Logged in successfully");
                }
            })
            .catch(() => {
                toast.error("Something went wrong, Please try again")
            })
    } catch (error) {
        toast.error("Something went wrong, Please try again")
    }
}

export const handleRegistration = ({ data, reset, handleLoading }: RegistrationProps) => {
    axios.post("/api/register", data)
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