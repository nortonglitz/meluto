"use client"

import { InputText, Button } from "@/components"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { LoginSchema, loginSchema } from "@/validations/schemas/auth"
import { login } from "@/actions/login"
import { SocialMediaButton } from "./social-media-button"
import { useState } from "react"
import { signIn } from "next-auth/react"

export const LoginForm = () => {

    // When error auth.js find an error it sends as url param ?error=""
    // Find more at https://authjs.dev/guides/basics/pages#error-codes
    const searchParams = useSearchParams()
    const authError = searchParams.get("error")
    const [isLoading, setIsLoading] = useState(false)

    const { handleSubmit, register, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (values: LoginSchema) => {
        const { status, message } = await login("email", { email: values.email })
        if (status === "success") {
            console.log(message)
        } else {
            console.log(message)
        }
    }

    const handleSocialClick = () => {
        setIsLoading(true)
        signIn("google")
    }

    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <InputText disabled={isLoading} placeholder="E-mail" className="w-full" {...register("email")} error={errors.email?.message} />
                <Button disabled={isLoading} className="w-full" type="submit">Entrar</Button>
            </form>
            <div className="flex my-4 items-center text-xs">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400">OU</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <SocialMediaButton onClick={handleSocialClick} disabled={isLoading} />
        </>
    )
}

export default LoginForm
