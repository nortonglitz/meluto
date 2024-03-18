"use client"

import { Button, Description } from "@/components"
import { FaX, FaMagnifyingGlass, FaArrowRotateLeft, FaArrowRight } from "react-icons/fa6"
import { InputNumberNumeric, InputCheckboxOptions, ButtonsOptions } from "@/components"
import { ResidentialPropertyLabel } from "./residential-property-label"

/* Is necessary to add "as const" on each element of array, so it can exctract the literal type of it,
if you don't do that, it will ge type string instead of the literal type.
*/

const NUMERIC_OPTIONS = [
    { value: 0, label: "Qualquer" } as const,
    { value: 1, label: "1+" } as const,
    { value: 2, label: "2+" } as const,
    { value: 3, label: "3+" } as const,
    { value: 4, label: "4+" } as const,
    { value: 5, label: "5+" } as const
]

export const RESIDENTIAL_PROPERTIES = [
    { value: "apartment", label: <ResidentialPropertyLabel property="apartment" /> } as const,
    { value: "house", label: <ResidentialPropertyLabel property="house" /> } as const,
    { value: "lot", label: <ResidentialPropertyLabel property="lot" /> } as const,
    { value: "rural", label: <ResidentialPropertyLabel property="rural" /> } as const,
]

export const RESIDENTIAL_PROPERTY_CONSTRUCTION_STATUS = [
    { value: "built", label: "Pronto para morar" } as const,
    { value: "under_construction", label: "Em construção" } as const,
    { value: "pre-construction", label: "Na planta" } as const
]

export const RESIDENTIAL_PROPERTY_SPECIAL_FEATURES = [
    { value: "furnished", label: "Mobiliado" } as const,
    { value: "gated_community", label: "Condomínio" } as const
].sort((a, b) => (a.label.localeCompare(b.label)))

export const RESIDENTIAL_PROPERTY_FEATURES = [
    { value: "ac", label: "Ar condicionado" } as const,
    { value: "cabinet", label: "Armário embutido" } as const,
    { value: "pets", label: "Aceita pets" } as const, /* check to be a special */
    { value: "laundry_room", label: "Área de serviço" } as const,
    { value: "backyard", label: "Quintal" } as const,
    { value: "balcony", label: "Varanda" } as const,
    { value: "elevator", label: "Elevador" } as const,
    { value: "gourmet_area", label: "Área gourmet" } as const,
    { value: "beach", label: "Praia" } as const,
    { value: "near_water", label: "Represa/Lago/Lagoa" } as const,
    { value: "green_area", label: "Área verde" } as const
].sort((a, b) => (a.label.localeCompare(b.label)))

const TRANSACTIONS = [
    { value: "purchase", label: "Compra" } as const,
    { value: "rent", label: "Aluguel " } as const
].sort((a, b) => (a.label.localeCompare(b.label)))

export type ResidentialPropertyConstructionStatus = typeof RESIDENTIAL_PROPERTY_CONSTRUCTION_STATUS[number]["value"]
export type ResidentialTransaction = typeof TRANSACTIONS[number]["value"]
export type ResidentialProperty = typeof RESIDENTIAL_PROPERTIES[number]["value"]
export type ResidentialPropertyFeature = typeof RESIDENTIAL_PROPERTY_FEATURES[number]["value"] | typeof RESIDENTIAL_PROPERTY_SPECIAL_FEATURES[number]["value"]

interface FilterPropertyResidentialOwnerProps {
    isOpen: boolean
    onClose: () => void
    onReset: () => void

    bedrooms: number
    onChangeBedrooms: (bedrooms: number) => void

    bathrooms: number
    onChangeBathrooms: (bathrooms: number) => void

    parkingSpaces: number
    onChangeParkingSpaces: (parkingSpaces: number) => void

    transactions: ResidentialTransaction[]
    onChangeTransaction: (transaction: ResidentialTransaction) => void

    properties: ResidentialProperty[],
    onChangeProperty: (property: ResidentialProperty) => void

    propertyFeatures: ResidentialPropertyFeature[],
    onChangePropertyFeature: (propertyFeature: ResidentialPropertyFeature) => void

    propertyConstructionStatus: ResidentialPropertyConstructionStatus[],
    onChangePropertyConstructionStatus: (constructionStatus: ResidentialPropertyConstructionStatus) => void

    areaMin?: number | null,
    areaMax?: number | null,
    onChangeAreaMin: (areaMin?: number) => void
    onChangeAreaMax: (areaMax?: number) => void

    buyMin?: number | null,
    buyMax?: number | null,
    onChangeBuyMin: (buyMin?: number) => void
    onChangeBuyMax: (buyMax?: number) => void

    rentMin?: number | null,
    rentMax?: number | null,
    onChangeRentMin: (rentMin?: number) => void
    onChangeRentMax: (rentMax?: number) => void
}

export const FilterPropertyResidentialOwner = ({
    isOpen, onClose, onReset,
    bedrooms, onChangeBedrooms,
    bathrooms, onChangeBathrooms,
    parkingSpaces, onChangeParkingSpaces,
    transactions, onChangeTransaction,
    properties, onChangeProperty,
    propertyFeatures, onChangePropertyFeature,
    propertyConstructionStatus, onChangePropertyConstructionStatus,
    buyMax, buyMin, onChangeBuyMax, onChangeBuyMin,
    rentMax, rentMin, onChangeRentMax, onChangeRentMin,
    areaMax, areaMin, onChangeAreaMax, onChangeAreaMin
}: FilterPropertyResidentialOwnerProps) => {

    return (
        <div
            className={`
                ${isOpen ? "fixed" : "hidden"}
                fixed
                top-0
                bottom-0
                right-0
                left-0
                z-600
                flex
                items-center
                justify-center
                bg-black/80
            `}
        >
            <div
                className="
                    relative
                    overflow-hidden
                    
                    w-full
                    h-full
                    
                    sm:w-4/5
                    sm:h-5/6
                    sm:rounded-3xl
                    sm:border

                    lg:w-4/5

                    xl:w-4/5

                    2xl:w-3/5
                    
                    bg-gray-100
                    sm:border-gray-200
                    
                    dark:bg-gray-950
                    sm:dark:border-gray-700
                "
            >
                <div className="flex justify-between px-5 pt-4 pb-2">
                    <h1
                        className="
                            font-medium
                            font-exo
                            text-3xl
                        "
                    >
                        Filtros
                    </h1>
                    <button
                        onClick={onClose}
                        className="
                            p-3
                            rounded-full
                            dark:hover:bg-gray-900
                            hover:bg-gray-200
                        "
                    >
                        <FaX className="text-xl" />
                    </button>
                </div>
                <hr className="dark:border-gray-700 border-gray-200" />
                <form
                    className="
                        flex
                        flex-col
                        gap-10
                        px-4
                        pt-4
                        pb-40
                        w-full
                        h-full
                        overflow-y-auto
                        overscroll-contain

                        [&>fieldset]:min-w-full

                        [&>fieldset>h2]:text-xl
                        [&>fieldset>h2]:font-exo
                        [&>fieldset>h2]:font-medium
                    "
                >
                    <fieldset>
                        <h2>Transação</h2>
                        <Description>Qual tipo de transação procura? Pelo menos uma opção ficará selecionada.</Description>
                        <div className="mt-4 flex gap-4">
                            <ButtonsOptions
                                options={TRANSACTIONS}
                                selectedOptions={transactions}
                                onChangeValue={newModality => onChangeTransaction(newModality as ResidentialTransaction)}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h2>Propriedade</h2>
                        <Description>Qual tipo de imóvel procura? Pelo menos uma opção ficará selecionada.</Description>
                        <div className="mt-3 flex gap-4 flex-wrap">
                            <ButtonsOptions
                                options={RESIDENTIAL_PROPERTIES}
                                selectedOptions={properties}
                                onChangeValue={newProperty => { onChangeProperty(newProperty as ResidentialProperty) }}
                            />
                        </div>
                    </fieldset>
                    <fieldset
                        className="
                            [&>div]:mt-4

                            [&>div>h3]:font-medium
                            [&>div>h3]:font-exo
                            [&>div>h3]:text-sm
                            [&>div>h3]:tracking-wider
                            [&>div>h3]:mb-1
                            [&>div>h3]:mx-4
                        "
                    >
                        <h2>Faixa de Preço</h2>
                        <div>
                            <h3>COMPRA</h3>
                            <div className="flex gap-4 flex-wrap items-center">
                                <InputNumberNumeric
                                    placeholder="Mínimo"
                                    prefix="R$ "
                                    maxLength={15}
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={0}
                                    value={buyMin ?? ""}
                                    onValueChange={({ floatValue }) => onChangeBuyMin(floatValue)}
                                />
                                <FaArrowRight className="hidden lg:block" />
                                <InputNumberNumeric
                                    placeholder="Máximo"
                                    prefix="R$ "
                                    maxLength={15}
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={0}
                                    value={buyMax ?? ""}
                                    onValueChange={({ floatValue }) => onChangeBuyMax(floatValue)}
                                />
                            </div>
                        </div>
                        <div>
                            <h3>ALUGUEL</h3>
                            <div className="flex gap-4 flex-wrap items-center">
                                <InputNumberNumeric
                                    placeholder="Mínimo"
                                    prefix="R$ "
                                    maxLength={12}
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={0}
                                    value={rentMin ?? ""}
                                    onValueChange={({ floatValue }) => onChangeRentMin(floatValue)}
                                />
                                <FaArrowRight className="hidden lg:block" />
                                <InputNumberNumeric
                                    placeholder="Máximo"
                                    prefix="R$ "
                                    maxLength={12}
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    decimalScale={0}
                                    value={rentMax ?? ""}
                                    onValueChange={({ floatValue }) => onChangeRentMax(floatValue)}
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h2>Quartos</h2>
                        <div className="mt-3 flex gap-4 overflow-auto p-1">
                            <ButtonsOptions
                                options={NUMERIC_OPTIONS}
                                selectedOptions={[bedrooms]}
                                onChangeValue={newBedrooms => onChangeBedrooms(Number(newBedrooms))}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h2>Banheiros</h2>
                        <div className="mt-3 flex gap-4 overflow-auto p-1">
                            <ButtonsOptions
                                options={NUMERIC_OPTIONS}
                                selectedOptions={[bathrooms]}
                                onChangeValue={newBathrooms => onChangeBathrooms(Number(newBathrooms))}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h2>Vagas</h2>
                        <div className="mt-3 flex gap-4 overflow-auto p-1">
                            <ButtonsOptions
                                options={NUMERIC_OPTIONS}
                                selectedOptions={[parkingSpaces]}
                                onChangeValue={newParkingSpaces => onChangeParkingSpaces(Number(newParkingSpaces))}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h2>Área</h2>
                        <div className="flex gap-4 flex-wrap mt-4 items-center">
                            <InputNumberNumeric
                                placeholder="Mínima"
                                maxLength={10}
                                thousandSeparator="."
                                decimalSeparator=","
                                suffix=" m²"
                                decimalScale={0}
                                value={areaMin ?? ""}
                                onValueChange={({ floatValue }) => onChangeAreaMin(floatValue)}
                            />
                            <FaArrowRight className="hidden lg:block" />
                            <InputNumberNumeric
                                placeholder="Máxima"
                                maxLength={10}
                                thousandSeparator="."
                                decimalSeparator=","
                                suffix=" m²"
                                decimalScale={0}
                                value={areaMax ?? ""}
                                onValueChange={({ floatValue }) => onChangeAreaMax(floatValue)}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h2>Estágio</h2>
                        <Description>Em qual etapa procura obra do imóvel? Pelo menos uma opção ficará selecionada.</Description>
                        <div className="mt-4 grid sm:grid-cols-3">
                            <InputCheckboxOptions
                                options={RESIDENTIAL_PROPERTY_CONSTRUCTION_STATUS}
                                selectedOptions={propertyConstructionStatus}
                                onChangeValue={newPropertyConstructionStatus => { onChangePropertyConstructionStatus(newPropertyConstructionStatus as ResidentialPropertyConstructionStatus) }}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h2>Características do Imóvel</h2>
                        <div className="mt-4 flex gap-4">
                            <ButtonsOptions
                                options={RESIDENTIAL_PROPERTY_SPECIAL_FEATURES}
                                selectedOptions={propertyFeatures}
                                onChangeValue={newPropertyFeature => onChangePropertyFeature(newPropertyFeature as ResidentialPropertyFeature)}
                            />
                        </div>
                        <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <InputCheckboxOptions
                                options={RESIDENTIAL_PROPERTY_FEATURES}
                                selectedOptions={propertyFeatures}
                                onChangeValue={newPropertyFeature => onChangePropertyFeature(newPropertyFeature as ResidentialPropertyFeature)}
                            />
                        </div>
                    </fieldset>
                </form>
                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        flex
                        items-center
                        justify-around
                        h-16

                        bg-gray-200
                        dark:bg-gray-900
                    "
                >
                    <Button
                        variant="text"
                        color="neutral"
                        onClick={onReset}
                        className="flex items-center gap-2"
                    >
                        <FaArrowRotateLeft />
                        Resetar
                    </Button>
                    <Button
                        className="flex items-center gap-2"
                    >
                        Pesquisar
                        <FaMagnifyingGlass />
                    </Button>
                </div>
            </div>
        </div>
    )
}