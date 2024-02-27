import { DetailedHTMLProps, HTMLAttributes } from "react"

interface DescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> { }

export const Description = ({
    className,
    ...props
}: DescriptionProps) => {
    return (
        <p
            className={`text-gray-500 dark:text-gray-400 ${className}`}
            {...props}
        >
        </p>
    )
}