"use client"

import { Button } from "@/components"
import { FaPlus } from "react-icons/fa6"
import { PlaceHolder } from "./placeholder"
import { CardListingProperty } from "@/components"
import { CardListingPropertyProps } from "@/components/cards/listing-property"
import { FilterBar } from "./filter-bar"
import { Filter } from "./filter"
import { MenuMobile } from "./menu-mobile"

const HOUSES: CardListingPropertyProps[] = Array.from({ length: 100 }, () => ({
    bedrooms: 3,
    bathrooms: 2,
    location: {
        area: "Represa de Jurumirim",
        biggerArea: "Avaré"
    },
    parkingLots: 2,
    rentMonthCosts: 200,
    rentMonthValue: 1200,
    saleValue: 1200000,
    size: 150,
    showMonthTotalValue: true
}))

export const ListingsProperties = () => {

    const isEmpty = false

    return (
        <>
            <Filter />
            <MenuMobile />
            <main className="flex justify-center">
                <div className="flex flex-col items-center mb-10 mt-10 sm:mx-10 mx-1 flex-grow">
                    <div
                        className={`
                            flex
                            w-full
                            justify-center
                            items-end

                            sm:justify-between
                        `}
                    >
                        <h1 className="text-3xl font-exo font-medium leading-none">Anúncios</h1>
                        <Button className="hidden sm:flex items-center">
                            <FaPlus className="mr-2 text-xl" />
                            Criar anúncio
                        </Button>
                    </div>
                    <hr className="hidden sm:flex w-full mt-2 dark:border-gray-700 border-gray-200" />
                    <FilterBar />
                    {!isEmpty && <PlaceHolder />}
                    <div className="flex gap-5 flex-wrap justify-center">
                        {HOUSES.map((
                            {
                                bathrooms, bedrooms, location, parkingLots, rentDayValue,
                                rentMonthCosts, rentMonthValue, saleValue, showMonthTotalValue, size
                            }, i
                        ) => (
                            <CardListingProperty
                                key={`card-property-${i}`}
                                saleValue={saleValue}
                                showMonthTotalValue={showMonthTotalValue}
                                size={size}
                                rentMonthValue={rentMonthValue}
                                rentMonthCosts={rentMonthCosts}
                                rentDayValue={rentDayValue}
                                bathrooms={bathrooms}
                                parkingLots={parkingLots}
                                bedrooms={bedrooms}
                                location={location}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
