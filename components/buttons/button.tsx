import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactNode
    link?: boolean
    color?: "primary" | "secondary" | "success" | "neutral"
}

export const Button = ({
    children,
    link = false,
    color = "primary",
    className,
    ...props
}: ButtonProps) => {

    const isPrimary = color === "primary"
    const isSecondary = color === "secondary"
    const isSuccess = color === "success"

    if (link) {
        return (
            <button
                className={`
                    transition-all
                    font-medium
                    px-4
                    py-2
                    rounded-3xl
                    
                    hover:bg-gray-400/10
                    dark:hover:bg-gray-600/10
                    
                    ${isPrimary ? "text-scooter-300" : ""}
                    ${isSecondary ? "text-trinidad-500" : ""}
                    ${isSuccess ? "text-green-500" : ""}

                    ${className ? className : ""}
                `}
                {...props}
            >
                {children}
            </button>
        )
    }

    return (
        <button
            className={`
                transition
                px-3
                py-2
                rounded-3xl

                disabled:opacity-50
                disabled:cursor-not-allowed

                ${isPrimary ? "bg-scooter-300" : ""}
                ${isPrimary ? "text-scooter-950" : ""}
                ${isPrimary ? "hover:bg-scooter-200" : ""}
                ${isPrimary ? "active:bg-scooter-400" : ""}

                ${isSecondary ? "bg-trinidad-500" : ""}
                ${isSecondary ? "text-trinidad-950" : ""}
                ${isSecondary ? "hover:bg-trinidad-400" : ""}
                ${isSecondary ? "active:bg-trinidad-600" : ""}

                ${isSuccess ? "bg-green-500" : ""}
                ${isSuccess ? "text-green-950" : ""}
                ${isSuccess ? "hover:bg-green-400" : ""}
                ${isSuccess ? "active:bg-green-600" : ""}

                ${className ? className : ""}
            `}
            {...props}
        >
            {children}
        </button>
    )
}