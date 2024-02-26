"use client"

import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface SocialMediaButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean
}

export const SocialMediaButton = ({
    className,
    ...props
}: SocialMediaButtonProps) => {

    return (
        <button
            className={`
                transition
                flex
                w-full
                rounded-3xl
                items-center
                px-4
                border
                border-scooter-500
                divide-x
                space-x-3
                text-scooter-950
                hover:bg-gray-100
                
                dark:text-scooter-100
                dark:hover:bg-gray-900

                disabled:cursor-not-allowed
                disabled:opacity-50
                
                ${className}
            `}
            {...props}
        >
            <Image
                src="/icons/google.svg"
                alt="google"
                className="w-7 h-7"
                width={48}
                height={48}
            />
            <span className="flex flex-grow justify-center py-2 border-scooter-500">
                Entrar com Google
            </span>
        </button>
    )
}
