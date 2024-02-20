import * as z from "zod"

export const loginSchema = z.object({
    email: z.string().email("Email inválido")
})

export type LoginSchema = z.infer<typeof loginSchema>