"use client"

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6"
import { useClickOutside } from "@/hooks"
import { useRef } from "react"

const options = [
    { value: "chocolate", label: "Prédio" },
    { value: "strawberry", label: "Casa" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" },
    { value: "vanilla", label: "Casa de Condomínio" }
]

export const InputSelectMultiple = () => {

    const [showOptions, setShowOptions] = useState(false)

    const selectRef = useRef(null)
    useClickOutside(() => setShowOptions(false), selectRef)

    return (
        <div className="relative" ref={selectRef}>
            <input
                onClick={() => setShowOptions(true)}
                type="text"
                className={`
                    w-full
                    border
                    border-gray-500
                    py-2
                    px-4
                    outline-none
                    
                    bg-gray-100

                    dark:bg-gray-900
                    
                    ${showOptions ? "rounded-t-3xl" : "rounded-3xl"}
                    ${showOptions ? "border-b-0" : ""}
                    ${showOptions ? "border-t-2" : ""}
                    ${showOptions ? "border-x-2" : ""}
                    ${showOptions ? "dark:border-white border-black" : ""} 
                    
                `}
                placeholder="Tipo de Imóvel"
            />
            <div
                className="
                    absolute
                    flex
                    items-center
                    w-fit
                    top-0
                    bottom-0
                    right-4
                "
            >
                <div
                    onClick={() => setShowOptions(!showOptions)}
                    className="p-1 rounded-md hover:bg-gray-800 cursor-pointer"
                >
                    <FaChevronDown
                        className={`
                            transition
                            ${showOptions ? "-rotate-180" : ""}
                        `}
                    />
                </div>
            </div>
            <div
                className={`
                    absolute
                    ${showOptions ? "flex" : "hidden"}
                    flex-col
                    gap-1
                    top-full
                    px-3
                    pb-4
                    rounded-b-3xl
                    left-0
                    right-0
                    border-2
                    border-t-0
                    max-h-48

                    border-black dark:border-white

                    bg-gray-100

                    dark:bg-gray-900
                `}
            >
                <hr className="border-gray-300 dark:border-gray-600" />
                <ul className="overflow-y-auto">
                    {options.map(({ value, label }, i) => (
                        <li key={`key-${value}-${i}`}>
                            <label
                                htmlFor={`select-${value}-${i}`}
                                className="
                                    flex
                                    w-full
                                    select-none
                                    cursor-pointer
                                    px-2
                                    py-1
                                    rounded-xl

                                    dark:hover:bg-gray-800
                                    hover:bg-gray-200

                                    dark:[&:has(input:checked)]:bg-gray-800
                                    [&:has(input:checked)]:bg-gray-200
                                "
                            >
                                <input
                                    className="
                                        mr-2
                                        cursor-pointer
                                        accent-scooter-300
                                    "
                                    id={`select-${value}-${i}`}
                                    type="checkbox"
                                    value={value}
                                />
                                {label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}