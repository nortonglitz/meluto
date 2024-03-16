import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react"
import { NumericFormat, NumericFormatProps } from "react-number-format"

interface InputNumberNumericProps extends NumericFormatProps {
    error?: string
    wrapperClassName?: string
    labelClassName?: string
    className?: string
    label?: string
}

// fordwardRef first type is the main element and then the component type
// also use ref on the main element, don't forget it's the second param

export const InputNumberNumeric = forwardRef<HTMLInputElement, InputNumberNumericProps>(({
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
        <div className={`
            ${label ? "flex flex-col" : ""}
            ${wrapperClassName ? wrapperClassName : ""}
        `}>
            {label &&
                <label
                    className={`mx-4 font-exo${labelClassName}`}
                    htmlFor={id || label?.toLocaleLowerCase().split(" ").join("-")}
                >
                    {label}
                </label>
            }
            <NumericFormat
                id={id || label?.toLocaleLowerCase().split(" ").join("-")}
                getInputRef={ref}
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

                    ${hasError ? "border-red-500 outline-red-500" : ""}

                    ${className ? className : ""}
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

InputNumberNumeric.displayName = "InputNumberNumeric"