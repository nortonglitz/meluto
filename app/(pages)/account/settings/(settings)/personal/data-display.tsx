import { Description } from "@/components"
import { FaEdit } from "react-icons/fa"

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
    return (
        <div>
            <h6 className="text-xl font-exo font-semibold">{title}</h6>
            <p className="mb-2">
                {subtitle}
            </p>
            <button
                className="
                    border
                    w-fit
                    px-2
                    py-1
                    mb-1
                    border-dashed
                    rounded-xl
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
            <Description className="text-sm">
                <i>
                    Atualizado em {lastEdit}
                </i>
            </Description>
        </div>
    )
}