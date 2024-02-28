"use client"

import { Button } from "@/components"
import { ChangeEventHandler, useState } from "react"
import { FaUser } from "react-icons/fa"
import { FaArrowUpFromBracket } from "react-icons/fa6"

interface InputAvatarProps {
    src?: string | null
    loading?: boolean
}

export const InputAvatar = ({
    src,
    loading = false
}: InputAvatarProps) => {

    const [avatarImg, setAvatarImg] = useState("")

    /*
        Function made to get the file and transform into a blob to display to the user
    */
    const handleAvatarImgChange: ChangeEventHandler<HTMLInputElement> = e => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setAvatarImg(URL.createObjectURL(file))
        }
    }

    return (
        <div className="flex select-none relative">
            <div
                className="
                    absolute
                    left-full
                    bottom-0
                "
            >
                <Button color="success" link>
                    Aceitar
                </Button>
            </div>
            <label htmlFor="avatar-input">
                <input
                    type="file"
                    accept="image/*"
                    id="avatar-input"
                    onChange={handleAvatarImgChange}
                    hidden
                />
                <div
                    className={`
                        ${loading && "animate-pulse"}

                        flex
                        items-center
                        justify-center
                        rounded-full
                        w-32
                        h-32
                        cursor-pointer
                        relative
                        outline
                        outline-2
                        group

                        dark:bg-gray-800

                        bg-gray-200
                    `}
                >
                    <div
                        className="
                            transition
                            opacity-0
                            group-hover:opacity-100
                            flex
                            absolute
                            items-center
                            justify-center
                            top-0
                            bottom-0
                            right-0
                            left-0
                            rounded-full

                            dark:bg-gray-800/60

                            bg-gray-200/50
                        "
                    >
                        <FaArrowUpFromBracket className="h-12 w-12 dark:text-white/60 text-black/60" />
                    </div>
                    {src ?
                        <img src={avatarImg || src} alt="upload avatar" className="w-full h-full object-cover rounded-full" />
                        :
                        <FaUser
                            className="
                                h-16
                                w-16
                                dark:text-scooter-200
                                text-scooter-900
                            "
                        />

                    }
                </div>
            </label>
        </div>
    )
}