import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const emailSchema = z.object({
    email: z.string().email("E-mail inválido")
})

export type EmailSchema = z.infer<typeof emailSchema>

export const useEmailSchema = () => {
    return useForm<EmailSchema>({
        resolver: zodResolver(emailSchema)
    })
} 