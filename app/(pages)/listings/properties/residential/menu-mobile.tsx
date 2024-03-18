"use client"

import { FaPlus, FaFilter } from "react-icons/fa6"
import { usePropertyResidentialOwnerFilterStore } from "@/stores/providers"


export const MenuMobile = () => {

    const { openFilter } = usePropertyResidentialOwnerFilterStore(state => state)

    return (
        <nav
            className={`
                fixed
                bottom-0
                w-full
                left-1
                right-1
                flex
                justify-around
                py-2

                sm:hidden

                dark:bg-gray-950/90
                bg-white/90
            `}
        >
            <button className="flex flex-col items-center" onClick={openFilter}>
                <FaFilter className="text-xl" />
                Filtros
            </button>
            <button className="flex flex-col items-center">
                <FaPlus className="text-xl" />
                Criar anúncio
            </button>
        </nav>
    )
}