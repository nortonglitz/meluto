export const Avatar = () => {
    return (
        <img
            className="
                transition-all
                rounded-full
                h-8
                cursor-pointer
                outline-gray-100

                hover:outline
                hover:outline-4
            "
            src="/images/placeholders/blank-profile.webp"
            alt="profile picture"
        />
    )
}