import { SocialMediaButton } from "./social-media-button"
import { LoginForm } from "./login-form"
import { Logo } from "@/components"

const LoginPage = () => {

    return (
        <div className="flex justify-center flex-grow items-center">
            <div className="max-w-[20vw] animate-fade-in relative">
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
                <div className="flex my-4 items-center text-xs">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400">OU</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>
                <SocialMediaButton />
            </div>
        </div>
    )
}

export default LoginPage
