interface AvatarProps {
    src: string | null | undefined
    loading?: boolean
}

export const Avatar = ({
    src,
    loading = false
}: AvatarProps) => {
    return (
        <img
            className={`
                relative
                transition-all
                rounded-full
                h-8
                cursor-pointer
                outline-gray-100

                hover:outline
                hover:outline-4

                ${loading && "animate-pulse"}
            `}
            src={src ?? "/images/placeholders/blank-profile.webp"}
            alt="profile picture"
        />
    )
}