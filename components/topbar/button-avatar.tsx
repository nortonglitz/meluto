"use client"

import { useSession } from "next-auth/react"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { FaUser } from "react-icons/fa"

interface ButtonAvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

export const ButtonAvatar = ({
    className,
    ...props
}: ButtonAvatarProps) => {

    const { data, status } = useSession()

    const isLoading = status === "loading"
    const src = data?.user?.image

    return (
        <button
            className={`
                transition-all
                h-9
                w-9
                rounded-full
                flex
                justify-center
                items-center
                cursor-pointer
                outline-scooter-300

                hover:outline-2
                hover:outline

                dark:bg-gray-800

                bg-gray-200

                ${isLoading ? "animate-pulse" : ""}
                ${className}
            `}
            {...props}
        >
            {src ?
                <img
                    className={`
                        rounded-full
                        ${isLoading ? "animate-pulse" : ""}
                    `}
                    src={src}
                    alt="profile image"
                />
                :
                <FaUser
                    className="
                        h-6
                        w-6
                        dark:text-scooter-200
                        text-scooter-900
                    "
                />
            }
        </button>
    )
}