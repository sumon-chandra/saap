"use client"

import InputBox from '@/ui/InputBox'
import SocialAuthButton from '@/components/authForm/SocialAuthButton'
import { Button, Divider, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm, } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'sonner'
import { useSession } from "next-auth/react"
import { handleLogin, handleRegistration, socialLogin } from './actions/authActions'

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
                handleRegistration({
                    data,
                    reset,
                    handleLoading: setIsLoading
                })
            }

            if (variant === "LOGIN") {
                handleLogin({
                    data,
                    reset,
                    handleLoading: setIsLoading
                })
            }

        } catch (error) {
            console.log("Authentication Failed!!", error);
            toast.error("Something went wrong, Please try again")
            setIsLoading(false)
        }
    }

    const handleSocialLogin = (action: string) => {
        socialLogin({
            action,
            handleLoading: setIsLoading
        })
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
                                    <InputBox
                                        label='Name'
                                        type="text"
                                        errors={errors}
                                        id="name"
                                        register={register}
                                    />
                                )}
                                <InputBox
                                    label='Email'
                                    register={register}
                                    errors={errors}
                                    id='email'
                                    type='email'
                                />
                                <InputBox
                                    label='Password'
                                    register={register}
                                    errors={errors}
                                    id='password'
                                    type='password'
                                />
                                <div className='w-full mt-4'>
                                    <Button
                                        type="submit"
                                        isLoading={isLoading || status === "loading"}
                                        className='w-full py-6 font-bold md:text-xl disabled:opacity-50 disabled:cursor-not-allowed'
                                        disabled={isLoading || status === "loading"}
                                    >
                                        {variant === "LOGIN" ? "Login" : "Register"}
                                    </Button>
                                </div>
                            </form>
                            <div className='flex items-center justify-center gap-5 mt-5'>
                                <Divider orientation='horizontal' className='w-20' />
                                <span>Or</span>
                                <Divider orientation='horizontal' className='w-20' />
                            </div>
                            <div className='mt-5 space-y-2'>
                                <SocialAuthButton
                                    icon={FcGoogle}
                                    onClick={() => handleSocialLogin("google")}
                                >
                                    Continue with
                                </SocialAuthButton>
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
