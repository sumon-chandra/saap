import axios from "axios";
import { signIn } from "next-auth/react";
import { FieldValues } from "react-hook-form";

export const socialLogin = async (action: string, handleLoading: (isLogin: boolean) => void) => {
    try {
        handleLoading(true);
        const response = await signIn(action, { redirect: true })
        return response
    } catch (error: any) {
        console.error({ "Failed to sign in with social account": error });
        handleLoading(false)
    } finally {
        handleLoading(false)
    }
}

export const handleRegistration = async (
    data: FieldValues,
    handleLoading: (isLogin: boolean) => void
) => {
    try {
        handleLoading(true)
        const response = await axios.post("/api/register", data)
        if (response?.status === 200) {
            await signIn("credentials", data)
        }
        return response
    } catch (error: any) {
        console.log("Registration error :", error);
        handleLoading(false);
    } finally {
        handleLoading(false)
    }
}

export const handleLogin = async (
    data: FieldValues,
    handleLoading: (isLogin: boolean) => void
) => {
    try {
        handleLoading(true)
        const response = await signIn("credentials", { ...data, redirect: false })
        return response
    } catch (error: any) {
        console.error("Failed to login", error);
        handleLoading(false)
    } finally {
        handleLoading(false)
    }
}