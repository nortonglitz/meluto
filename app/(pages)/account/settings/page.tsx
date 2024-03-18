import { FaAddressCard, FaRankingStar, FaWallet } from "react-icons/fa6"
import { Card } from "./card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Conta ─ Meluto",
    description: "Encontre todos seus detalhes no nosso site."
}

export default function AccountSettingsPage() {
    return (
        <main className="animate-fade-in mx-2 sm:mx-0">
            <h1 className="text-4xl font-exo font-medium text-center my-10">
                Conta
            </h1>
            <div className="flex gap-4 flex-wrap justify-center">
                <Card
                    title="Informações Pessoais"
                    desc="Gerencie telefone, e-mail e outros detalhes sobre você."
                    icon={<FaAddressCard />}
                    href="/account/settings/personal"
                />
                <Card
                    title="Financeiro"
                    desc="Veja suas formas de pagamento, endereço de faturamento e outros detalhes."
                    icon={<FaWallet />}
                    href="#"
                />
                <Card
                    title="Plano"
                    desc="Saiba mais sobre outros planos, sobre a sua assinatura e outros detalhes."
                    icon={<FaRankingStar />}
                    href="#"
                />
            </div>
        </main>
    )
}
