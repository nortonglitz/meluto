"use client"

import { InputText, Button } from "@/components"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { LoginSchema, loginSchema } from "@/validations/schemas/auth"
import { login } from "@/actions/login"

export const LoginForm = () => {

    // When error auth.js find an error it sends as url param ?error=""
    // Find more at https://authjs.dev/guides/basics/pages#error-codes
    const searchParams = useSearchParams()
    const authError = searchParams.get("error")

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

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <InputText placeholder="E-mail" className="w-full" {...register("email")} error={errors.email?.message} />
            <Button className="w-full" type="submit">Entrar</Button>
        </form>
    )
}

export default LoginForm
