import type { Metadata } from "next"
import { Murecho, Exo } from "next/font/google"
import "./globals.css"
import { SessionProvider } from "next-auth/react"

// Exo, Anek_Tamil, Murecho
const murecho = Murecho({ subsets: ["latin"], variable: "--font-murecho" })
const exo = Exo({ subsets: ["latin"], variable: "--font-exo" })

export const metadata: Metadata = {
  title: "Meluto",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`
            ${murecho.variable}
            font-murecho
            ${exo.variable}
            dark:bg-gray-950
            dark:text-white
          `}>
          {children}
        </body>
      </SessionProvider>
    </html>
  )
}
