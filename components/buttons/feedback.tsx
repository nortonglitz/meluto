import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { FaCheck, FaX } from "react-icons/fa6"

interface ButtonFeedbackProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    option: "confirm" | "cancel"
}

export const ButtonFeedback = ({
    option,
    className,
    ...props
}: ButtonFeedbackProps) => {

    const isConfirm = option === "confirm"
    const isCancel = option === "cancel"

    return (
        <button
            className={`
                rounded-full
                p-3
                border
                border-dashed
                border-gray-400

                ${isConfirm && "hover:bg-green-200/20 dark:hover:bg-green-900/20"}
                ${isCancel && "hover:bg-red-200/20 dark:hover:bg-red-900/20"}
                
                ${className}
            `}
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