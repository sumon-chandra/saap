"use client"
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import SocialAuthButton from "@/ui/SocialAuthButton";
import { Divider } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import { BsGithub, BsGoogle } from "react-icons/bs";
import { toast } from "sonner";

type Variant = "LOGIN" | "REGISTER"

const LoginPage = () => {
     const [variant, setVariant] = useState<Variant>("LOGIN")
     const [isLoading, setIsLoading] = useState(false)

     const toggleVariant = useCallback(() => {
          if (variant === "REGISTER") {
               setVariant("LOGIN")
          } else {
               setVariant("LOGIN")
          }
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
               setIsLoading(true)
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
          <div>
               <h2 className="text-2xl font-bold text-center">Login</h2>
               <div className="mt-8 border-2 border-gray-300 rounded-md sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white dark:bg-[#32394B] shadow-sm sm:rounded-lg sm:px-10">
                         <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                              {variant === "REGISTER" && <Input id="name" label="Name" register={register} errors={errors} disabled={isLoading} required />}
                              <Input id="email" label="Email" register={register} errors={errors} type="email" disabled={isLoading} required />
                              <Input id="password" label="Password" register={register} errors={errors} type="password" disabled={isLoading} required />
                              <div>
                                   <Button type="submit" disabled={isLoading} fullWidth>
                                        {variant === "LOGIN" ? "Login" : "Register"}
                                   </Button>
                              </div>
                         </form>

                         <div className="mt-8">
                              <div className="flex items-center justify-center gap-2">

                                   <Divider orientation="horizontal" className="w-20" />
                                   <span>Or continue with</span>
                                   <Divider orientation="horizontal" className="w-20" />
                              </div>

                              <div className="flex flex-col gap-2 mt-6">
                                   <SocialAuthButton icon={BsGithub} onClick={() => socialAction("github")} />
                                   <SocialAuthButton icon={BsGoogle} onClick={() => socialAction("Google")} />
                              </div>
                         </div>
                         <div className="flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500">
                              <div>{variant === "LOGIN" ? "New to Nook? " : "Already have an account?"}</div>
                              <div onClick={toggleVariant} className="underline cursor-pointer">
                                   {variant === "LOGIN" ? "Create an account" : "Please Login"}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default LoginPage;
