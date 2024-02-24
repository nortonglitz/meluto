import NextAuth from "next-auth"
import Google from "@auth/core/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { postgres } from "@/postgres"

// Documentation https://authjs.dev/reference/nextjs

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: DrizzleAdapter(postgres),
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        {
            id: "resend",
            type: "email",
            name: "",
            from: "",
            maxAge: 1200,
            options: {},
            async sendVerificationRequest({ identifier: email, url }) {
                const response = await fetch(process.env.EMAIL_SERVER_API, {
                    body: JSON.stringify({
                        personalizations: [{ to: [{ email }] }],
                        from: { email: "noreply@company.com" },
                        subject: "Sign in to Your page",
                        content: [
                            {
                                type: "text/plain",
                                value: `Please click here to authenticate - ${url}`,
                            }
                        ]
                    }),
                    headers: {
                        Authorization: `Bearer ${process.env.EMAIL_SERVER_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                })
                if (!response.ok) {
                    const { errors } = await response.json()
                    throw new Error(JSON.stringify(errors))
                }
            }
        }
        // Nodemailer is not edge compatible, use http based email provider https://authjs.dev/guides/providers/email-http
    ]
})