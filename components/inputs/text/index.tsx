import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface InputTextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export const InputText = ({
    className,
    ...props
}: InputTextProps) => {
    return (
        <input
            type="text"
            autoFocus
            className={`
                border
                bg-gray-100
                border-gray-500
                rounded-3xl
                py-2
                px-4

                ${className}
            `}
            {...props}
        />
    )
}