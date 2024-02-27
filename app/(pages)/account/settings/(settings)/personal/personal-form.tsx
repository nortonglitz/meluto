"use client"

import { useSession } from "next-auth/react"
import { DataDisplay } from "./data-display"
import { FaTrashCan } from "react-icons/fa6"

export const PersonalForm = () => {
    const { data } = useSession()
    return (
        <div className="animate-fade-in">
            <div>
                <img src={data?.user?.image || "#"} alt="profile image" className="rounded-full" />
            </div>
            <DataDisplay
                title="Nome"
                subtitle="Será a forma que outros usuários poderão se referenciar a você. A edição é limitada a uma vez a cada 90 dias."
                value="Norton Glitz"
                lastEdit="01/01/2024"
            />
            <hr className="my-4 border-gray-400" />
            <DataDisplay
                title="E-mail"
                subtitle="Iremos utiliza-lo para poder nos comunicar e para você ter acesso a sua conta. Utilize um e-mail que você tenha acesso."
                value="norton.glitz@gmail.com"
                lastEdit="01/01/2024"
            />
            <hr className="my-4 border-gray-400" />
            <DataDisplay
                title="Telefone"
                subtitle="Será o meio que os compradores poderão entrar em contato, também como telefone principal de WhatsApp."
                value="(14) 991 740 220"
                lastEdit="01/01/2024"
            />
            <hr className="my-4 border-gray-400" />
            <div className="flex justify-between">
                <div>
                    <h6 className="text-xl font-exo font-semibold">Conta</h6>
                    <p>Excluir conta</p>
                </div>
                <button className="flex items-center text-red-400">
                    <p className="mr-2">Excluir</p>
                    <FaTrashCan />
                </button>
            </div>
        </div>
    )
}