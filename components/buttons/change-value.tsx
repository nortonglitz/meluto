import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

interface ButtonChangeValueProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    sign: "minus" | "plus"
}

export const ButtonChangeValue = ({
    sign,
    ...props
}: ButtonChangeValueProps) => {
    return (
        <button
            className="
                transition
                border-2
                rounded-full
                px-2
                py-2
                text-sm
                hover:border-black
                dark:hover:border-white

                active:bg-gray-300/20
                dark:active:bg-gray-200/20

                dark:border-gray-600
                border-gray-300
            "
            {...props}
        >
            {sign === "minus" ? <FaMinus /> : <FaPlus />}
        </button>
    )
}