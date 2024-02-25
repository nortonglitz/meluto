import { LoginForm } from "./login-form"

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
