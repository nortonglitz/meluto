import { DetailedHTMLProps, HTMLAttributes } from "react"
import { IconType } from "react-icons"
import { ButtonChangeValue } from "@/components"

interface FilterBarItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
    icon: IconType
    onIncrement: () => void
    onDecrement: () => void
    value: number
}

export const FilterBarItem = ({
    title,
    icon: Icon,
    className,
    onDecrement,
    onIncrement,
    value
}: FilterBarItemProps) => {
    return (
        <div
            className={`
                hidden
                items-center
                gap-2
                group
                select-none
                ${className ? className : ""}
            `}
        >
            <div
                className="
                        flex
                        flex-col
                        items-center
                        mr-2
                    "
            >
                <Icon className="text-lg" />
                <span
                    className="
                            transition
                            leading-none
                            group-hover:text-trinidad-500
                        "
                >
                    {title}
                </span>
            </div>
            <ButtonChangeValue sign="minus" onClick={onDecrement} />
            <span
                className="font-exo font-medium text-lg text-trinidad-500 w-[3ch] text-center"
            >
                {value}+
            </span>
            <ButtonChangeValue sign="plus" onClick={onIncrement} />
        </div>
    )
}