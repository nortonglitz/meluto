import Image from "next/image"

export const EmailSent = () => {

    return (
        <div className="animate-fade-in">
            <Image
                className="w-[40%] m-auto mb-10"
                src="/illustrations/email-sent.svg"
                width={810}
                height={672}
                alt="E-mail sent"
            />
            <div className="absolute -top-[30%] flex justify-center">
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
                Verifique seu e-mail
            </h1>
            <p className="text-gray-400 mb-4">Nós enviamos um link em sua caixa de entrada. Use-o para efetuar o login.</p>
        </div>
    )
}