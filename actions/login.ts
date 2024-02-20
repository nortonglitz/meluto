"use server"

import { LoginSchema, loginSchema } from "@/validations/schemas/auth"
import { BuiltInProviderType } from "next-auth/providers"
import { signIn } from "@/auth"

type LoginReturnType = {
    status: "error" | "success"
    message: string
}

export const login = async (provider: BuiltInProviderType, values: LoginSchema): Promise<LoginReturnType> => {

    try {
        const validatedFields = await loginSchema.safeParseAsync(values)

        /* CHECK IF EMAIL IS PRESENT AND CORRECT */

        if (!validatedFields.success) {
            return {
                status: "error",
                message: "Invalid fields"
            }
        }

        const { email } = validatedFields.data

        if (provider === "email") {
            await signIn(provider, {
                email: email
            })
        }

        return {
            status: "success",
            message: "Logged in"
        }

    } catch (err: any) {

        console.error(err)

        return {
            status: "error",
            message: "Something went wrong"
        }
    }
}