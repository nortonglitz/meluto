"use client"

import { ChangeEventHandler, useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { FaArrowUpFromBracket } from "react-icons/fa6"
import { ButtonFeedback } from "../../buttons/feedback"

interface InputAvatarProps {
    src?: string | null
    loading?: boolean
    onConfirm: (file: File | null) => void
}

export const InputAvatar = ({
    src,
    loading = false,
    onConfirm
}: InputAvatarProps) => {

    /* 
        TODO: Create a way to use properly the function onConfirm
    
    */

    const [avatarImgURL, setAvatarImgURL] = useState("")
    const [avatarFile, setAvatarFile] = useState<File | null>(null)

    /* 
        Have to remove unnecessary url after upload a new image,
        More: https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#using_object_urls
    */

    useEffect(() => {
        // Happens before avatarImg change
        return () => {
            if (avatarImgURL) {
                URL.revokeObjectURL(avatarImgURL)
            }
        }
    }, [avatarImgURL])

    /*
        Function made to get the file and transform into a url to display to the user
    */
    const handleAvatarImgChange: ChangeEventHandler<HTMLInputElement> = e => {

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setAvatarFile(file)
            setAvatarImgURL(URL.createObjectURL(file))
        }

        /* 
            Do this to reset the value and let it be only on the avatarImg state,
            because if you don't, the user can't see the same image twice if he clicks on cancel button,
            because will be showing the picture of profile, but is stored the value of the picture canceled
        */

        e.target.value = ""
    }

    return (
        <div className="flex select-none relative">
            {avatarImgURL &&
                <div
                    className="
                        flex
                        justify-between
                        absolute
                        bottom-0
                        -right-12
                        -left-12
                    "
                >
                    <ButtonFeedback option="cancel" onClick={() => setAvatarImgURL("")} />
                    <ButtonFeedback option="confirm" onClick={() => onConfirm(avatarFile)} />
                </div>
            }
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
                        ${loading ? "animate-pulse" : ""}

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
                    {avatarImgURL ?
                        <img src={avatarImgURL} alt="upload avatar" className="w-full h-full object-cover rounded-full" />
                        : src ?
                            <img src={src} alt="upload avatar" className="w-full h-full object-cover rounded-full" />
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