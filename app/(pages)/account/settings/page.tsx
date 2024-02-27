import { FaAddressCard, FaRankingStar, FaWallet } from "react-icons/fa6"
import { Card } from "./card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Conta ─ Meluto",
    description: "Encontre todos seus detalhes no nosso site."
}

export default function AccountSettingsPage() {
    return (
        <main className="animate-fade-in">
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
            {/* <div
                className="
                    rounded-3xl
                    border-gray-700
                    border
                    w-fit
                    p-4
                "
            >
                <h6 className="text-xl font-exo font-semibold">Nome</h6>
                <p>Norton Glitz</p>
                <h6 className="text-xl font-exo font-semibold">Foto</h6>
                <p>Imagem vai aparecer aqui</p>
                <h6 className="text-xl font-exo font-semibold">E-mail</h6>
                <p>norton.glitz@gmail.com</p>
                <h6 className="text-xl font-exo font-semibold">Telefone</h6>
                <p>14 99174 0220</p>
                <h6 className="text-xl font-exo font-semibold">Excluir conta</h6>
                <p>Clicar para excluir</p>
            </div>
            <h2>Financeiro</h2>
            <div
                className="
                    rounded-3xl
                    border-gray-700
                    border
                    w-fit
                    p-4
                "
            >
                <h6 className="text-xl font-exo font-semibold">Formas de Pagamento</h6>
                <p>Aparecer cartões de crédito</p>
                <h6 className="text-xl font-exo font-semibold">Histórico de Transações</h6>
                <p>Aparecer com data de cada assinatura</p>
                <h6 className="text-xl font-exo font-semibold">Endereço de Faturamento</h6>
                <p>Endereço</p>
            </div>
            <h2>Assinatura</h2>
            <div
                className="
                    rounded-3xl
                    border-gray-700
                    border
                    w-fit
                    p-4
                "
            >
                <h6 className="text-xl font-exo font-semibold">Nível</h6>
                <p>Mostrar qual nível o cliente está: vip, gold, etc...</p>
                <h6 className="text-xl font-exo font-semibold">Quantidade de anúncio contratada</h6>
                <p>Colocar somente o número de anúncios que pode fazer no total</p>
                <h6 className="text-xl font-exo font-semibold">Downgrade / Upgrade</h6>
                <p>Possibilidade de trocar de assinatura</p>
            </div> */}
        </main>
    )
}
