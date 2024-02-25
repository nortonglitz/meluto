"use client"

import { InputText, Button, Logo } from "@/components"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { LoginSchema, loginSchema } from "@/validations/schemas/auth"
import { login } from "@/actions/login"
import { SocialMediaButton } from "./social-media-button"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { EmailSent } from "./email-sent"

// Use this method to avoid use client, also use this to return an error feedback
const Error = () => {
    const searchParams = useSearchParams()
    const authError = searchParams.get("error")

    // When error auth.js find an error it sends as url param ?error=""
    // Find more at https://authjs.dev/guides/basics/pages#error-codes

    return (
        <div>
            {authError}
        </div>
    )
}

export const LoginForm = () => {

    const [emailSent, setEmailSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { handleSubmit, register, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (values: LoginSchema) => {
        setIsLoading(true)
        const { status, message } = await login("resend", { email: values.email })
        if (status === "error") {
            //TODO: create auth error page
            console.log(message)
        } else {
            setEmailSent(true)
        }
        setIsLoading(false)
    }

    const handleSocialClick = () => {
        setIsLoading(true)
        signIn("google")
    }

    if (emailSent) {
        return <EmailSent />
    }

    return (
        <>
            <div className="absolute -top-[30%] flex justify-center">
                <Logo className="w-[60%]" />
            </div>
            <h1
                className="
                            left-6
                            text-3xl
                            font-exo
                            font-semibold
                            text-scooter-400
                        "
            >
                Entrar
            </h1>
            <p className="text-gray-400 mb-4">Estamos felizes por você estar aqui. Entre para ter acesso a todo o nosso conteúdo.</p>
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
