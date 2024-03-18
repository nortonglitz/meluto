"use client"

import { FilterBarItem } from "./filter-bar-item"
import { FaBed, FaShower, FaCar, FaFilter, FaMagnifyingGlass } from "react-icons/fa6"
import { Button } from "@/components"
import { usePropertyResidentialOwnerFilterStore } from "@/stores/providers"


export const FilterBar = () => {

    const {
        bedrooms, decBedrooms, incBedrooms,
        parkingSpaces, decParkingSpaces, incParkingSpaces,
        bathrooms, decBathrooms, incBathrooms,
        openFilter
    } = usePropertyResidentialOwnerFilterStore(state => state)

    return (
        <div
            className="
                sticky
                top-16
                w-full
                py-2
                justify-center

                dark:bg-gray-950
                bg-white
                
                hidden
                sm:flex
            "
        >
            <div className="flex gap-5 items-center relative">
                <FilterBarItem
                    value={bedrooms}
                    onDecrement={decBedrooms}
                    onIncrement={incBedrooms}
                    title="Quartos"
                    icon={FaBed}
                    className="sm:flex"
                />
                <hr className="border-l h-4/5 dark:border-gray-700 border-gray-200" />
                <FilterBarItem
                    value={bathrooms}
                    onDecrement={decBathrooms}
                    onIncrement={incBathrooms}
                    title="Banheiros"
                    icon={FaShower}
                    className="sm:flex"
                />
                <hr className="hidden lg:flex border-l h-4/5 dark:border-gray-700 border-gray-200" />
                <FilterBarItem
                    value={parkingSpaces}
                    onDecrement={decParkingSpaces}
                    onIncrement={incParkingSpaces}
                    title="Vagas"
                    icon={FaCar}
                    className="lg:flex"
                />
            </div>
            <div className="flex justify-around gap-5 md:min-w-64 px-4">
                <Button
                    variant="outlined"
                    color="neutral"
                    className="
                        flex
                        items-center
                        [&>svg]:mr-2
                    "
                >
                    <FaMagnifyingGlass />
                    Pesquisar
                </Button>
                <Button className="flex items-center" onClick={openFilter}>
                    <FaFilter className="text-lg mr-2" />
                    Filtros
                </Button>
            </div>
        </div>
    )
}