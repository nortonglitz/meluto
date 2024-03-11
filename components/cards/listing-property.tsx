import Image from "next/image"
import { FaShower, FaCar, FaBed } from "react-icons/fa6"
import { formatCurrency, formatSquareMeter } from "@/utils/formatters/numbers"

interface CardListingPropertyProps {
    rentMonthValue?: number
    rentMonthCosts?: number
    rentDayValue?: number
    showMonthTotalValue?: boolean,
    saleValue?: number
    bathrooms?: number
    parkingLots?: number
    bedrooms?: number
    size?: number
    location?: {
        area?: string
        biggerArea?: string
    }
}

export const CardListingProperty = ({
    rentDayValue,
    rentMonthValue,
    rentMonthCosts,
    showMonthTotalValue = false,
    saleValue,
    bathrooms,
    parkingLots,
    bedrooms,
    size,
    location
}: CardListingPropertyProps) => {
    return (
        <div
            className="
                overflow-hidden
                border
                flex
                flex-col
                
                bg-gray-100
                hover:bg-gray-100
                border-gray-200
                
                dark:bg-gray-900
                dark:border-gray-700
                dark:hover:bg-gray-900

                sm:w-72
                sm:rounded-3xl
                sm:h-96

                w-full
                h-[70vh] 
            "
        >
            <div
                className="
                    w-full
                    h-full
                    flex
                    justify-center
                    items-center
                    border-b-4
                    border-scooter-300
                    
                    dark:bg-gray-600
                    bg-gray-300
                "
            >
                <Image
                    className="h-24"
                    src="/illustrations/few-images.svg"
                    width={816}
                    height={700}
                    alt="listing thumbnail"
                />
            </div>
            <div className="
                    flex
                    flex-col
                    justify-between
                    pt-1
                    px-2
                    pb-2
                "
            >
                {/* 
                    VALUES
                */}
                <div
                    className="
                        [&>div>span]:ml-1
                        [&_strong]:font-medium
                        leading-tight

                        dark:[&>div>span]:text-gray-400
                        [&>div>span]:text-gray-600

                        [&_strong]:text-lg
                    "
                >
                    {saleValue &&
                        <div>
                            <strong>{formatCurrency(saleValue, { maximumFractionDigits: 0 })}</strong>
                            <span>venda</span>
                        </div>
                    }
                    {((rentMonthValue && !showMonthTotalValue) || (!rentMonthCosts && rentMonthValue)) &&
                        <div>
                            <strong>{formatCurrency(rentMonthValue, { maximumFractionDigits: 0 })}</strong>
                            <span>mês</span>
                        </div>
                    }
                    {(showMonthTotalValue && rentMonthCosts && rentMonthValue) &&
                        <div>
                            <strong>{formatCurrency(rentMonthValue + rentMonthCosts, { maximumFractionDigits: 0 })}</strong>
                            <span>mês + custos</span>
                        </div>
                    }
                    {rentDayValue &&
                        <div>
                            <strong>{formatCurrency(rentDayValue, { maximumFractionDigits: 0 })}</strong>
                            <span>noite</span>
                        </div>
                    }
                </div>
                {/* 
                    SPECIFICATIONS
                */}
                {(bathrooms || parkingLots || bedrooms || size) &&
                    <div
                        className="
                            flex
                            justify-between
                            font-medium
                            my-1
                            
                            dark:text-gray-400
                            text-gray-600
                        "
                    >
                        <div className="
                            flex
                            items-center
                            [&>svg:not(:first-child)]:ml-4
                            [&>svg]:mr-1
                        "
                        >
                            {bathrooms && <><FaShower /> {bathrooms}</>}
                            {parkingLots && <><FaCar /> {parkingLots}</>}
                            {bedrooms && <><FaBed /> {bedrooms}</>}
                        </div>
                        {size && formatSquareMeter(size)}
                    </div>
                }
                <div>
                    {/* 
                    LOCATIONS
                */}
                </div>
                {(location && (location.area || location.biggerArea)) &&
                    <div
                        className="
                            flex
                            justify-end
                            dark:text-gray-400
                            text-gray-600
                            leading-none
                            italic
                        "
                    >
                        {(location.area && location.biggerArea) ?
                            `${location.area}, ${location.biggerArea}`
                            :
                            location.area ?
                                location.area
                                :
                                location.biggerArea
                        }
                    </div>
                }
            </div>
        </div>
    )
}