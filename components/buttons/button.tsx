import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactNode
    color?: "primary" | "secondary" | "success" | "neutral"
    variant?: "outlined" | "standard" | "text"
}

export const Button = ({
    children,
    color = "primary",
    className,
    variant = "standard",
    ...props
}: ButtonProps) => {

    const isPrimary = color === "primary"
    const isSecondary = color === "secondary"
    const isSuccess = color === "success"
    const isNeutral = color === "neutral"

    if (variant === "text") {
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

    if (variant === "outlined") {
        return (
            <button
                className={`
                    px-4
                    py-2
                    rounded-3xl

                    outline

                    focus-visible:outline-2
                    dark:focus-visible:outline-white
                    
                    hover:bg-gray-400/10
                    active:bg-gray-400/20

                    dark:hover:bg-gray-400/20
                    dark:active:bg-gray-400/30
                    
                    
                    ${isPrimary ? "text-scooter-300" : ""}
                    ${isSecondary ? "text-trinidad-500" : ""}
                    ${isSuccess ? "text-green-500" : ""}
                    ${isNeutral ? "text-inherit" : ""}

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

                ${isPrimary ?
                    `
                    bg-scooter-300
                    text-scooter-950
                    hover:bg-scooter-200
                    active:bg-scooter-400
                    `
                    : ""
                }

                ${isSecondary ?
                    `
                    bg-trinidad-500
                    text-trinidad-950
                    hover:bg-trinidad-400
                    active:bg-trinidad-600
                    `
                    : ""
                }

                ${isSuccess ?
                    `
                    bg-green-500
                    text-green-950
                    hover:bg-green-400
                    active:bg-green-600
                    `
                    : ""
                }

                ${className ? className : ""}
            `}
            {...props}
        >
            {children}
        </button>
    )
}