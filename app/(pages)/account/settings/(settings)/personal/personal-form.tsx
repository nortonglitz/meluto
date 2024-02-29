"use client"

import { useSession } from "next-auth/react"
import { DataDisplay } from "./data-display"
import { FaTrashCan } from "react-icons/fa6"
import { InputAvatar } from "@/components"

export const PersonalForm = () => {

    const { data, status } = useSession()

    return (
        <div className="animate-fade-in">
            <div className="flex justify-center mb-10">
                <InputAvatar
                    src={data?.user?.image}
                    loading={status === "loading"}
                    onConfirm={(file) => console.log(file)}
                />
            </div>
            <DataDisplay
                title="Nome"
                field="name"
                subtitle="Será a forma que outros usuários poderão se referenciar a você. A edição é limitada a uma vez a cada 90 dias."
                value={[data?.user?.name]}
                lastEdit="01/01/2024"
            />
            <hr className="my-4 border-gray-400" />
            <DataDisplay
                title="E-mail"
                field="email"
                subtitle="Iremos utiliza-lo para poder nos comunicar e para você ter acesso a sua conta. Utilize um e-mail que você tenha acesso."
                value={[data?.user?.email]}
                lastEdit="01/01/2024"
            />
            <hr className="my-4 border-gray-400" />
            <DataDisplay
                title="Telefone"
                field="phone"
                subtitle="Será o meio que os compradores poderão entrar em contato por meio de ligação."
                value={["14991740220"]}
                lastEdit="01/01/2024"
            />
            <hr className="my-4 border-gray-400" />
            <DataDisplay
                title="WhatsApp"
                field="whatsapp"
                subtitle="Será o meio que os compradores poderão entrar em contato por meio do WhatsApp."
                value={["14991740220"]}
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