"use client"

import { createStore } from "zustand/vanilla"
import { ResidentialTransaction, ResidentialProperty, ResidentialPropertyFeature, ResidentialPropertyConstructionStatus } from "@/components/filters/property/residential/owner"

type PropertyResidentialOwnerFilterState = {
    bedrooms: number
    bathrooms: number
    parkingSpaces: number
    filterIsOpen: boolean
    transactions: ResidentialTransaction[]
    properties: ResidentialProperty[]
    propertyFeatures: ResidentialPropertyFeature[]
    propertyConstructionStatus: ResidentialPropertyConstructionStatus[]
    buyMin?: number | null
    buyMax?: number | null
    rentMin?: number | null
    rentMax?: number | null
    areaMax?: number | null
    areaMin?: number | null
}

type PropertyResidentialOwnerFilterAction = {
    // BEDROOMS
    incBedrooms: () => void
    decBedrooms: () => void
    setBedrooms: (bedrooms: number) => void

    // BATHROOMS
    incBathrooms: () => void
    decBathrooms: () => void
    setBathrooms: (bathrooms: number) => void

    // PARKING SPACES
    incParkingSpaces: () => void
    decParkingSpaces: () => void
    setParkingSpaces: (parkingSpaces: number) => void

    // FILTER
    openFilter: () => void
    closeFilter: () => void
    resetFilter: () => void

    // TRANSACTIONS
    selectTransaction: (transaction: ResidentialTransaction) => void

    // PROPERTIES
    selectProperty: (property: ResidentialProperty) => void

    // PROPERTY FEATURES
    selectPropertyFeature: (feature: ResidentialPropertyFeature) => void

    // PROPERTY FEATURES
    selectPropertyConstructionStatus: (propertyConstructionStatus: ResidentialPropertyConstructionStatus) => void

    // BUY
    setBuyMin: (buyMin?: number) => void
    setBuyMax: (buyMax?: number) => void

    // RENT
    setRentMin: (rentMin?: number) => void
    setRentMax: (rentMax?: number) => void

    // AREA
    setAreaMin: (areaMin?: number) => void
    setAreaMax: (areaMax?: number) => void
}

export type PropertyResidentialOwnerFilterStore = PropertyResidentialOwnerFilterState & PropertyResidentialOwnerFilterAction

export const createPropertyResidentialOwnerFilterStore = () => createStore<PropertyResidentialOwnerFilterStore>()((set) => ({
    filterIsOpen: false,
    bedrooms: 0,
    bathrooms: 0,
    parkingSpaces: 0,
    propertyFeatures: [],
    areaMin: null,
    areaMax: null,
    buyMin: null,
    buyMax: null,
    rentMin: null,
    rentMax: null,
    properties: ["apartment", "house", "lot", "rural"],
    transactions: ["purchase", "rent"],
    propertyConstructionStatus: ["built", "pre-construction", "under_construction"],

    // BEDROOMS
    incBedrooms: () => set(state => (state.bedrooms < 5 ? { bedrooms: state.bedrooms + 1 } : state)),
    decBedrooms: () => set(state => (state.bedrooms > 0 ? { bedrooms: state.bedrooms - 1 } : state)),
    setBedrooms: newBedrooms => set(state => (newBedrooms >= 0 && newBedrooms <= 5 ? { bedrooms: newBedrooms } : state)),

    // BATHROOMS
    incBathrooms: () => set(state => (state.bathrooms < 5 ? { bathrooms: state.bathrooms + 1 } : state)),
    decBathrooms: () => set(state => (state.bathrooms > 0 ? { bathrooms: state.bathrooms - 1 } : state)),
    setBathrooms: newBathrooms => set(state => (newBathrooms >= 0 && newBathrooms <= 5 ? { bathrooms: newBathrooms } : state)),

    // PARKING LOTS
    incParkingSpaces: () => set(state => (state.parkingSpaces < 5 ? { parkingSpaces: state.parkingSpaces + 1 } : state)),
    decParkingSpaces: () => set(state => (state.parkingSpaces > 0 ? { parkingSpaces: state.parkingSpaces - 1 } : state)),
    setParkingSpaces: parkingSpaces => set((state) => (parkingSpaces >= 0 && parkingSpaces <= 5 ? { parkingSpaces } : state)),

    // BUY
    setBuyMax: newBuyMax => set(() => ({ buyMax: newBuyMax })),
    setBuyMin: newBuyMin => set(() => ({ buyMin: newBuyMin })),

    // RENT
    setRentMax: newRentMax => set(() => ({ rentMax: newRentMax })),
    setRentMin: newRentMin => set(() => ({ rentMin: newRentMin })),

    // AREA
    setAreaMax: newAreaMax => set(() => ({ areaMax: newAreaMax })),
    setAreaMin: newAreaMin => set(() => ({ areaMin: newAreaMin })),

    // TRANSACTIONS
    selectTransaction: newTransaction => set(state => {
        const modalityIdx = state.transactions.indexOf(newTransaction)

        if (modalityIdx === -1) {
            return { transactions: [...state.transactions, newTransaction] }
        }

        if (state.transactions.length > 1) {
            state.transactions.splice(modalityIdx, 1)
            return { transactions: state.transactions }
        }

        return state
    }),

    selectProperty: newProperty => set(state => {
        const propertyIdx = state.properties.indexOf(newProperty)

        if (propertyIdx === -1) {
            return { properties: [...state.properties, newProperty] }
        }

        if (state.properties.length > 1) {
            state.properties.splice(propertyIdx, 1)
            return { properties: state.properties }
        }

        return state
    }),

    // PROPERTY FEATURES
    selectPropertyFeature: newPropertyFeature => set(state => {
        const propertyFeatureIdx = state.propertyFeatures.indexOf(newPropertyFeature)

        if (propertyFeatureIdx === -1) {
            return { propertyFeatures: [...state.propertyFeatures, newPropertyFeature] }
        }

        state.propertyFeatures.splice(propertyFeatureIdx, 1)
        return { propertyFeatures: state.propertyFeatures }
    }),

    // PROPERTY STAGES
    selectPropertyConstructionStatus: newPropertyConstructionStatus => set(state => {
        const stageIdx = state.propertyConstructionStatus.indexOf(newPropertyConstructionStatus)

        if (stageIdx === -1) {
            return { propertyConstructionStatus: [...state.propertyConstructionStatus, newPropertyConstructionStatus] }
        }

        if (state.propertyConstructionStatus.length > 1) {
            state.propertyConstructionStatus.splice(stageIdx, 1)
            return { propertyConstructionStatus: state.propertyConstructionStatus }
        }

        return state
    }),

    // FILTER
    closeFilter: () => set((state) => {
        console.log(state)
        return { filterIsOpen: false }
    }),
    openFilter: () => set(() => ({ filterIsOpen: true })),
    resetFilter: () => set({
        bedrooms: 0,
        bathrooms: 0,
        parkingSpaces: 0,
        propertyFeatures: [],
        areaMin: null,
        areaMax: null,
        buyMin: null,
        buyMax: null,
        rentMin: null,
        rentMax: null,
        properties: ["apartment", "house", "lot", "rural"],
        transactions: ["purchase", "rent"],
        propertyConstructionStatus: ["built", "under_construction", "pre-construction"],
    })

}))