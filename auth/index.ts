import NextAuth from "next-auth"
import Google from "@auth/core/providers/google"
import Resend from "@auth/core/providers/resend"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { postgres } from "@/postgres"
import { sendVerificationRequest } from "@/mail"

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
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            profile: profile => {
                return {
                    email: profile.email,
                    name: profile.name,
                    given_name: profile.given_name,
                    family_name: profile.family_name,
                    emailVerified: profile.email_verified ? new Date() : null,
                    image: profile.picture,
                    role: profile.role ?? "user"
                }
            },
            allowDangerousEmailAccountLinking: true
        }),
        // Nodemailer is not edge compatible, use http based email provider https://authjs.dev/guides/providers/email-http
        // Resend https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/resend.ts
        Resend({
            apiKey: process.env.EMAIL_SERVER_API_KEY,
            from: "Meluto <no-reply@mailing.meluto.com>",
            server: process.env.EMAIL_SERVER_API_URL,
            sendVerificationRequest
        })
    ],
    pages: {
        signIn: "/auth/login",
        verifyRequest: "/auth/verify-request"
    }
})