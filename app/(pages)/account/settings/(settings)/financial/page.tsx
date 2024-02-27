import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Financeiro ─ Meluto",
    description: "Gerencie telefone, e-mail e outros detalhes sobre você."
}

export default function PersonalPage() {

    return (
        <div className="animate-fade-in">
            Financeiro
        </div>
    )
}