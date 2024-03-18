"use client"

import { FilterPropertyResidentialOwner } from "@/components"
import { usePropertyResidentialOwnerFilterStore } from "@/stores/providers"

export const Filter = () => {
    const {
        filterIsOpen, resetFilter, closeFilter,
        bedrooms, setBedrooms,
        bathrooms, setBathrooms,
        parkingSpaces, setParkingSpaces,
        transactions, selectTransaction,
        properties, selectProperty,
        propertyFeatures, selectPropertyFeature,
        propertyConstructionStatus, selectPropertyConstructionStatus,
        buyMax, buyMin, setBuyMax, setBuyMin,
        rentMax, rentMin, setRentMax, setRentMin,
        areaMax, areaMin, setAreaMax, setAreaMin
    } = usePropertyResidentialOwnerFilterStore(state => state)

    return (
        <FilterPropertyResidentialOwner
            isOpen={filterIsOpen}
            onClose={closeFilter}
            onReset={resetFilter}

            bedrooms={bedrooms}
            onChangeBedrooms={setBedrooms}

            bathrooms={bathrooms}
            onChangeBathrooms={setBathrooms}

            parkingSpaces={parkingSpaces}
            onChangeParkingSpaces={setParkingSpaces}

            transactions={transactions}
            onChangeTransaction={selectTransaction}

            properties={properties}
            onChangeProperty={selectProperty}

            propertyFeatures={propertyFeatures}
            onChangePropertyFeature={selectPropertyFeature}

            propertyConstructionStatus={propertyConstructionStatus}
            onChangePropertyConstructionStatus={selectPropertyConstructionStatus}

            buyMax={buyMax}
            buyMin={buyMin}
            onChangeBuyMax={setBuyMax}
            onChangeBuyMin={setBuyMin}

            rentMax={rentMax}
            rentMin={rentMin}
            onChangeRentMax={setRentMax}
            onChangeRentMin={setRentMin}

            areaMax={areaMax}
            areaMin={areaMin}
            onChangeAreaMax={setAreaMax}
            onChangeAreaMin={setAreaMin}

        />
    )
}