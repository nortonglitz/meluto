"use client"

import { Description } from "@/components"
import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { EmailField } from "./email-field"
import { PhoneField } from "./phone-field"
import { NameField } from "./name-field"
import { formatPhone } from "@/utils/formatters/strings"

export type Value = null | undefined | string

interface DataDisplayProps {
    title: string
    subtitle: string
    value?: Value[]
    lastEdit: string,
    field: "email" | "phone" | "name" | "whatsapp"
}

export const DataDisplay = ({
    title,
    subtitle,
    value,
    lastEdit,
    field
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
            {!value || !value[0] ?
                <i className="text-gray-500 dark:text-gray-400">Não informado</i>
                :
                field === "phone" || field === "whatsapp" ?
                    formatPhone(value[0])
                    :
                    value.join(" ")
            }
            <FaEdit className="ml-2" />
        </button>
    )

    let editComponent = null

    switch (field) {
        case "phone":
            editComponent = <PhoneField type="phone" initialValue={value?.[0]} onClose={() => setShowEditComponent(false)} />
            break

        case "email":
            editComponent = <EmailField initialValue={value?.[0]} onClose={() => setShowEditComponent(false)} />
            break

        case "name":
            editComponent = <NameField initialValue={value} onClose={() => setShowEditComponent(false)} />
            break

        case "whatsapp":
            editComponent = <PhoneField type="whatsapp" initialValue={value?.[0]} onClose={() => setShowEditComponent(false)} />
            break
    }

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