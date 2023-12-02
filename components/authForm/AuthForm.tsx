"use client"

import Input from '@/ui/Input'
import SocialAuthButton from '@/components/authForm/SocialAuthButton'
import { Button, Divider, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm, } from 'react-hook-form'
import { BsGoogle } from 'react-icons/bs'
import { toast } from 'sonner'
import axios from "axios"
import { signIn, useSession } from "next-auth/react"

type Variant = "LOGIN" | "REGISTER"
interface AuthFormProps {
    onClose: () => void,
    isOpen: boolean | undefined
}

const AuthForm = ({ isOpen, onClose }: AuthFormProps) => {
    const [variant, setVariant] = useState<Variant>("LOGIN")
    const [isLoading, setIsLoading] = useState(false)
    const { data, status } = useSession()

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER")
        } else {
            setVariant("LOGIN")
        }
        console.log(variant);
    }, [variant])


    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            setIsLoading(true)
            if (variant === "REGISTER") {
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
                        setIsLoading(false);
                    })
                    .finally(() => setIsLoading(false));
            }
            if (variant === "LOGIN") {
                // TODO: Handle login
            }

        } catch (error) {
            toast.error("Something went wrong, Please try again")
        }
    }

    const socialAction = (action: string) => {
        try {
            setIsLoading(true)
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

    return (
        <Modal
            backdrop='blur'
            isOpen={status === "unauthenticated"}
            onClose={onClose}
            isDismissable={false}
            size='3xl'
        >
            <ModalContent className='py-4'>
                {(onClose) => (
                    <>
                        <ModalHeader
                            className='flex flex-col items-center justify-center w-full text-3xl'
                        >
                            {variant === "REGISTER" ? "Register" : "Login"} to SAAP
                        </ModalHeader>
                        <ModalBody className='w-full mx-auto md:w-1/2'>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                {variant === "REGISTER" && (
                                    <Input
                                        label='Name'
                                        type="text"
                                        errors={errors}
                                        id="name"
                                        register={register}
                                    />
                                )}
                                <Input
                                    label='Email'
                                    register={register}
                                    errors={errors}
                                    id='email'
                                    type='email'
                                />
                                <Input
                                    label='Password'
                                    register={register}
                                    errors={errors}
                                    id='password'
                                    type='password'
                                />
                                <div className='w-full mt-4'>
                                    <Button
                                        type="submit"
                                        color='success'
                                        isLoading={isLoading || status === "loading"}
                                        className='w-full font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed'
                                        disabled={isLoading || status === "loading"}
                                    >
                                        {variant === "LOGIN" ? "Login" : "Register"}
                                    </Button>
                                </div>
                            </form>
                            <div className='flex items-center justify-center gap-5 mt-5'>
                                <Divider orientation='horizontal' className='w-20' />
                                <span>Or continue with</span>
                                <Divider orientation='horizontal' className='w-20' />
                            </div>
                            <div className='mt-5 space-y-2'>
                                <SocialAuthButton
                                    icon={BsGoogle}
                                    onClick={() => socialAction("google")}
                                />
                            </div>
                            <div className="flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500">
                                <div>{variant === "LOGIN" ? "New to SAAP? " : "Already have an account?"}</div>
                                <div onClick={toggleVariant} className="font-bold underline cursor-pointer">
                                    {variant === "LOGIN" ? "Create an account" : "Please Login"}
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default AuthForm
