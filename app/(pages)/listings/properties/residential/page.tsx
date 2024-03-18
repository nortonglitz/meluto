import { PropertyResidentialOwnerFilterStoreProvider } from "@/stores/providers"
import { ListingsProperties } from "./listing-properties"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Propriedades Residenciais ─ Meluto",
    description: "Encontre seus anúncios listados conosco."
}

export default function ListingsPropertiesPage() {

    return (
        <>
            <PropertyResidentialOwnerFilterStoreProvider>
                <ListingsProperties />
            </PropertyResidentialOwnerFilterStoreProvider>
        </>
    )
}
