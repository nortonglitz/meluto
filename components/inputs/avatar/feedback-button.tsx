import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { FaCheck, FaX } from "react-icons/fa6"

interface FeedbackButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    option: "confirm" | "cancel"
}

export const FeedbackButton = ({
    option,
    ...props
}: FeedbackButtonProps) => {
    return (
        <button
            className="
                rounded-full
                hover:bg-gray-900
                p-3
                border
                border-dashed
                border-gray-400
            "
            {...props}
        >
            {option === "confirm" ?
                <FaCheck className="text-green-500 text-lg" />
                :
                <FaX className="text-red-500 text-lg" />
            }
        </button>
    )
}