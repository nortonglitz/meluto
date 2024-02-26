import { LoginForm } from "./login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Login ─ Meluto",
    description: "Página de acesso a plataforma meluto."
}

const LoginPage = () => {

    return (
        <div className="flex justify-center flex-grow items-center h-[100vh]">
            <div className="animate-fade-in relative w-[80%] sm:w-[50%] md:w-[70%] xl:w-[60%]">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage
