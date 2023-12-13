"use client"

import InputBox from '@/app/(auth)/components/InputBox'
import SocialAuthButton from '@/components/authForm/SocialAuthButton'
import { Button, Divider, } from '@nextui-org/react'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm, } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'sonner'
import { signIn, useSession } from "next-auth/react"
import { socialLogin } from '../_actions/authActions'
import { useRouter } from 'next/navigation'


const LoginPage = () => {
   const [isLoading, setIsLoading] = useState(false)
   const { data: session, status } = useSession()
   const router = useRouter()

   const handleRedirect = () => {
      router.push('/signup')
   }


   const {
      register,
      reset,
      handleSubmit,
      formState: { errors }
   } = useForm<FieldValues>({
      defaultValues: {
         email: "",
         password: "",
      }
   })

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      signIn("credentials", { ...data, redirect: false })
         .then((response) => {
            if (response?.error) {
               toast.error("Something went wrong, Try Again!");
            }
            if (response?.ok) {
               toast.success("Logged in successfully");
            }
         })
         .catch((error: any) => {
            console.log("Authentication Failed!!", error);
            toast.error("Something went wrong, Please try again")
            setIsLoading(false)
         })
         .finally(() => setIsLoading(false))
   }
   const handleSocialLogin = (action: string) => {
      socialLogin({
         action,
         handleLoading: setIsLoading
      })
   }

   return (
      <div className='relative'>
         <div className='max-w-[400px] mx-auto'>
            <div className="text-center font-bold text-saap-text-primary dark:text-saap-text-dark-primary">
               <div className="text-3xl ">Welcome back to <span className="text-saap-primary">Saap.</span></div>
               <p className="text-saap-text-secondary dark:text-saap-text-dark-secondary">Login to Saap.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
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
                     Login
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
               <div>New to SAAP?</div>
               <div onClick={handleRedirect} className="font-semibold text-saap-text-secondary dark:text-saap-text-dark-secondary underline cursor-pointer">
                  Create an account
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginPage
