"use client"

import { type ReactNode, createContext, useRef, useContext } from "react"
import { type StoreApi, useStore } from "zustand"

import { type PropertyResidentialOwnerFilterStore, createPropertyResidentialOwnerFilterStore } from "@/stores/property-residential-owner-filter"

export const PropertyResidentialOwnerFilterStoreContext = createContext<StoreApi<PropertyResidentialOwnerFilterStore> | null>(null)

export interface PropertyResidentialOwnerFilterStoreProviderProps {
    children: ReactNode
}

export const PropertyResidentialOwnerFilterStoreProvider = ({
    children
}: PropertyResidentialOwnerFilterStoreProviderProps) => {
    const propertyOwnerFilterStoreRef = useRef<StoreApi<PropertyResidentialOwnerFilterStore>>()

    if (!propertyOwnerFilterStoreRef.current) {
        propertyOwnerFilterStoreRef.current = createPropertyResidentialOwnerFilterStore()
    }

    return (
        <PropertyResidentialOwnerFilterStoreContext.Provider value={propertyOwnerFilterStoreRef.current}>
            {children}
        </PropertyResidentialOwnerFilterStoreContext.Provider>
    )
}

export const usePropertyResidentialOwnerFilterStore = <T,>(
    selector: (store: PropertyResidentialOwnerFilterStore) => T,
): T => {
    const propertyResidentialOwnerFilterStoreContext = useContext(PropertyResidentialOwnerFilterStoreContext)

    if (!propertyResidentialOwnerFilterStoreContext) {
        throw new Error("usePropertyResidentialOwnerFilterStore must be use within PropertyOwnerFilterStoreProvider")
    }

    return useStore(propertyResidentialOwnerFilterStoreContext, selector)
}