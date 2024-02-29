import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react"

interface InputTextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string
    wrapperClassName?: string
    labelClassName?: string
    className?: string
    label?: string
}

// fordwardRef first type is the main element and then the component type
// also use ref on the main element, don't forget it's the second param

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({
    className,
    wrapperClassName,
    labelClassName,
    error,
    id,
    label,
    ...props
}, ref) => {

    const hasError = !!error

    return (
        <div className={wrapperClassName}>
            {label &&
                <label
                    className={`mx-4 font-exo ${labelClassName}`}
                    htmlFor={id || "input-text"}
                >
                    {label}
                </label>
            }
            <input
                id={id || "input-text"}
                ref={ref}
                type="text"
                className={`
                    border
                    border-gray-500
                    rounded-3xl
                    py-2
                    px-4
                    
                    bg-gray-100

                    dark:bg-gray-900

                    disabled:opacity-50
                    disabled:cursor-not-allowed

                    ${hasError ? "border-red-500" : ""}
                    ${hasError ? "outline-red-500" : ""}

                    ${className}
                `}
                {...props}
            />
            {hasError && (
                <p
                    className="
                        text-sm
                        mt-1
                        mx-4
                        text-red-500
                    "
                >
                    {error}
                </p>
            )}
        </div>
    )
})

InputText.displayName = "InputText"