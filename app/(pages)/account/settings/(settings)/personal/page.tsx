import type { Metadata } from "next"
import { PersonalForm } from "./personal-form"

export const metadata: Metadata = {
    title: "Informações Pessoais ─ Meluto",
    description: "Gerencie telefone, e-mail e outros detalhes sobre você."
}

export default function PersonalPage() {

    return (
        <PersonalForm />
    )
}