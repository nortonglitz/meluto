import { Description } from "@/components"

interface Card {
    icon: React.ReactNode
    title: string
    desc: string
}

export const Card = ({
    icon,
    title,
    desc
}: Card) => {
    return (
        <div
            className="
                    w-full
                    sm:max-w-96
                    transition
                    rounded-xl
                    border
                    p-4
                    cursor-pointer

                    hover:bg-gray-100
                    border-gray-200
                    
                    dark:border-gray-700
                    dark:hover:bg-gray-900
                "
        >
            <div
                className="
                    flex
                    mb-4
                    [&>svg]:text-3xl
                    [&>svg]:mr-3
                ">
                {icon}
                <h2 className="font-exo font-medium text-lg">{title}</h2>
            </div>
            <Description className="text-gray-500 dark:text-gray-400">{desc}</Description>
        </div>
    )
}