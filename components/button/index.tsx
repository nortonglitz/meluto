import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactNode
    link?: boolean
}

export const Button = ({
    children,
    link = false,
    className,
    ...props
}: ButtonProps) => {

    if (link) {
        return (
            <button
                className={`
                    transition-all
                    font-medium
                    text-trinidad-500
                    px-4
                    py-2
                    rounded-3xl

                    hover:bg-gray-100

                    dark:hover:bg-gray-900
                    
                    ${className}
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

                bg-scooter-300
                text-scooter-950

                hover:bg-scooter-200

                active:bg-scooter-400

                disabled:opacity-50
                disabled:cursor-not-allowed
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    )
}