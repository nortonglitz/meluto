"use server"

import { EmailSchema, emailSchema } from "@/validations/schemas/auth"
import { BuiltInProviderType } from "next-auth/providers"
import { signIn } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect"

type LoginReturnType = {
    status: "error" | "success"
    message: string
}

export const login = async (provider: BuiltInProviderType, values: EmailSchema): Promise<LoginReturnType> => {

    try {
        const validatedFields = await emailSchema.safeParseAsync(values)

        /* CHECK IF EMAIL IS PRESENT AND CORRECT */

        if (!validatedFields.success) {
            return {
                status: "error",
                message: "Invalid fields"
            }
        }

        const { email } = validatedFields.data

        if (provider === "resend") {
            await signIn(provider, {
                email: email,
                redirect: false
            })

            return {
                status: "success",
                message: "Logged in"
            }
        }

        return {
            status: "error",
            message: "Did not provide correct specs"
        }

    } catch (error: any) {

        console.error(error)

        return {
            status: "error",
            message: "Something went wrong"
        }
    }
}