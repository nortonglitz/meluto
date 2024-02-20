import { LoginForm } from "./login-form"
import { Logo } from "@/components"

const LoginPage = () => {

    return (
        <div className="flex justify-center flex-grow items-center h-[100vh]">
            <div className="animate-fade-in relative w-[80%] sm:w-[50%] md:w-[70%] xl:w-[60%]">
                <div className="absolute -top-[30%] flex justify-center">
                    <Logo className="w-[60%]" />
                </div>
                <h1
                    className="
                            left-6
                            text-3xl
                            font-exo
                            font-semibold
                            text-scooter-400
                        "
                >
                    Entrar
                </h1>
                <p className="text-gray-400 mb-4">Estamos felizes por você estar aqui. Entre para ter acesso a todo o nosso conteúdo.</p>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage
