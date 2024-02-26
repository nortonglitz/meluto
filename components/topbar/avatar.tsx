import { FaUser } from "react-icons/fa"

interface AvatarProps {
    src: string | null | undefined
    loading?: boolean
}

export const Avatar = ({
    src,
    loading = false
}: AvatarProps) => {

    return (
        <div
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

                ${loading && "animate-pulse"}
            `}
        >
            {src ?
                <img
                    className={`
                        rounded-full
                        ${loading && "animate-pulse"}
                    `}
                    src={src}
                    alt="profile image"
                />
                :
                <FaUser
                    className="
                        h-5
                        w-5
                        dark:text-scooter-200
                        text-scooter-900
                    "
                />
            }
        </div>
    )
}