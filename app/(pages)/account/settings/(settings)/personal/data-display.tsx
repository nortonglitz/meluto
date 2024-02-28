"use client"

import { Description } from "@/components"
import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { EmailField } from "./email-field"

interface DataDisplayProps {
    title: string
    subtitle: string
    value: string
    lastEdit: string
}

export const DataDisplay = ({
    title,
    subtitle,
    value,
    lastEdit
}: DataDisplayProps) => {

    const [showEditComponent, setShowEditComponent] = useState(false)

    const displayValueButton = (
        <button
            onClick={() => setShowEditComponent(true)}
            className="
                border
                w-fit
                my-4
                border-dashed
                rounded-3xl
                py-2
                px-4
                cursor-pointer
                flex
                items-center
                
                border-gray-400
                hover:bg-gray-100

                dark:hover:bg-gray-900
                dark:border-gray-500
            "
        >
            {value}
            <FaEdit className="ml-2" />
        </button>
    )

    const editComponent = <EmailField initialValue={value} onCancel={() => setShowEditComponent(false)} />

    return (
        <div>
            <h6 className="text-xl font-exo font-semibold">{title}</h6>
            <p className="mb-2">
                {subtitle}
            </p>
            {showEditComponent ? editComponent : displayValueButton}
            <Description className="text-sm">
                <i>
                    Atualizado em {lastEdit}
                </i>
            </Description>
        </div>
    )
}