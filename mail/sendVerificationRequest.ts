import { EmailConfig } from "next-auth/providers"

type SendVerificationRequest = EmailConfig["sendVerificationRequest"]

export const sendVerificationRequest: SendVerificationRequest = async ({
    provider,
    identifier: to,
    url
}) => {
    const res = await fetch(provider.server, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${provider.apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: provider.from,
            to,
            subject: "Acessar sua conta",
            html: `
            <body>
                <table width="100%" border="0" cellspacing="20" cellpadding="0"
                    style="background: #f3f4f6; max-width: 600px; margin: auto; border-radius: 10px;">
                    <tr>
                    <td align="center"
                        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif;">
                        Entrar na plataforma <strong style="color: #25BADD">Meluto</strong>
                    </td>
                    </tr>
                    <tr>
                    <td align="center" style="padding: 20px 0;">
                        <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center" style="border-radius: 20px;" bgcolor="#72d9ee">
                                <a href="${url}"
                                target="_blank"
                                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #0c2e40; text-decoration: none; border-radius: 0; padding: 10px 20px; display: inline-block; font-weight: bold;">
                                    Entrar
                                </a>
                            </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    <tr>
                    <td align="center"
                        style="padding: 0px 0px 10px 0px; font-size: 0.75rem; line-height: 22px; font-family: Helvetica, Arial, sans-serif;">
                        <i>
                            Se você não solicitou esse e-mail, por favor ignore.
                        </i>
                    </td>
                    </tr>
                </table>
                </body>
            `,
            // Fallback text for email clients that don't support render HTML
            text: `Estamos felizes por você entrar em nossa plataforma.\n\nAcesse esse link para poder prosseguir com seu login\nLink: ${url}\n\nNos vemos lá!\n\nCaso você não tenha solicitado login, ignore essa mensagem.`
        })
    })

    if (!res.ok) {
        throw new Error("Resend error: " + JSON.stringify(await res.json()))
    }
}