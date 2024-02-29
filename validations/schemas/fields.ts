import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormProps } from "react-hook-form"

/* 
    E-MAIL
*/

export const emailSchema = z.object({
    email: z.string()
        .email("E-mail inválido")
        // Remove blank spaces and make it lowercase
        .trim()
        .transform(args => args.toLowerCase())
})

export type EmailSchema = z.infer<typeof emailSchema>

export const useEmailSchema = (props?: UseFormProps<EmailSchema>) => {
    return useForm<EmailSchema>({
        resolver: zodResolver(emailSchema),
        ...props
    })
}

/* 
    PHONE
*/

export const phoneSchema = z.object({
    phone: z.string()
        .regex(/^\d*$/, "Somente números.")
        .min(10, "No mínimo 10 números com DDD.")
        .max(11, "No máximo 11 números com DDD.")
        .trim()
})

export type PhoneSchema = z.infer<typeof phoneSchema>

export const usePhoneSchema = (props?: UseFormProps<PhoneSchema>) => {
    return useForm<PhoneSchema>({
        resolver: zodResolver(phoneSchema),
        ...props
    })
}

/* 
    NAME
*/

export const nameSchema = z.object({
    fname: z.string()
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ-]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿ]+)?(?: [A-Za-zÀ-ÖØ-öø-ÿ-]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿ]+)?)?$/, "Utilize caracteres válidos.")
        .min(3, "No mínimo 3 caracteres.")
        .max(50, "No máximo 50 caracteres")
        .trim(),

    // Make this field accept empty string "" and then convert it to undefined
    // More info: https://zod.dev/?id=unions check "optional string validation"
    lname: z.union([
        z.string()
            .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ-]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿ]+)?(?: [A-Za-zÀ-ÖØ-öø-ÿ-]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿ]+)?)?$/, "Utilize caracteres válidos.")
            .min(3, "No mínimo 3 caracteres.")
            .max(50, "No máximo 50 caracteres")
            .trim()
            .optional(),
        z.literal("").transform(() => undefined)
    ])
})

export type NameSchema = z.infer<typeof nameSchema>

export const useNameSchema = (props?: UseFormProps<NameSchema>) => {
    return useForm<NameSchema>({
        resolver: zodResolver(nameSchema),
        ...props
    })
}