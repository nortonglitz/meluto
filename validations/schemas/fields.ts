import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormProps } from "react-hook-form"

export const emailSchema = z.object({
    email: z.string().email("E-mail inválido")
})

export type EmailSchema = z.infer<typeof emailSchema>

export const useEmailSchema = (props?: UseFormProps<EmailSchema>) => {
    return useForm<EmailSchema>({
        resolver: zodResolver(emailSchema),
        ...props
    })
}

export const phoneSchema = z.object({
    phone: z.string()
        .min(10, "Telefone precisa ter no mínimo 10 caracteres com DDD.")
        .max(11, "Telefone precisa ter no máximo 11 caracteres com DDD.")
})

export type PhoneSchema = z.infer<typeof phoneSchema>

export const usePhoneSchema = (props?: UseFormProps<PhoneSchema>) => {
    return useForm<PhoneSchema>({
        resolver: zodResolver(phoneSchema),
        ...props
    })
}