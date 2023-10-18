"use client"

import Input from '@/ui/Input'
import SocialAuthButton from '@/components/authForm/SocialAuthButton'
import { Button, Divider, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm, } from 'react-hook-form'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { toast } from 'sonner'

type Variant = "LOGIN" | "REGISTER"
interface AuthFormProps {
    onClose: () => void,
    isOpen: boolean | undefined
}

const AuthForm = ({ isOpen, onClose }: AuthFormProps) => {
    const [variant, setVariant] = useState<Variant>("LOGIN")
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER")
        } else {
            setVariant("LOGIN")
        }
        console.log(variant);
    }, [variant])


    const { register, reset, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        try {
            // setIsLoading(true)
            if (variant === "REGISTER") {
                // TODO: Handle registration
            }
            if (variant === "LOGIN") {
                // TODO: Handle login
            }

        } catch (error) {
            toast.error("Something went wrong, Please try again")
        }
    }

    const socialAction = (action: String) => {
        try {
            setIsLoading(true)
            // TODO: Implement Social login - Google, Facebook, Twitter and others
        } catch (error) {
            toast.error("Something went wrong, Please try again")
        }
    }

    return (
        <Modal backdrop='blur' isOpen={isOpen} onClose={onClose} isDismissable={false} size='3xl'>
            <ModalContent className='py-4'>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col items-center justify-center w-full text-3xl'>{variant === "REGISTER" ? "Register" : "Login"} to SAAP</ModalHeader>
                        <ModalBody className='w-full mx-auto md:w-1/2'>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                {variant === "REGISTER" && (
                                    <Input label='Name' type="text" errors={errors} id="name" register={register} />
                                )}
                                <Input label='Email' register={register} errors={errors} id='email' type='email' />
                                <Input label='Password' register={register} errors={errors} id='password' type='password' />
                                <div className='w-full mt-4'>
                                    <Button type="submit" color='success' className='w-full font-bold text-white' disabled={isLoading}>{variant === "LOGIN" ? "Login" : "Register"}</Button>
                                </div>
                            </form>
                            <div className='flex items-center justify-center gap-5 mt-5'>
                                <Divider orientation='horizontal' className='w-20' />
                                <span>Or continue with</span>
                                <Divider orientation='horizontal' className='w-20' />
                            </div>
                            <div className='mt-5 space-y-2'>
                                <SocialAuthButton icon={BsGoogle} onClick={() => socialAction("google")} />
                                <SocialAuthButton icon={BsFacebook} onClick={() => socialAction("facebook")} />

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
