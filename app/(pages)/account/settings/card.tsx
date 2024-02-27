import { Description } from "@/components"
import Link from "next/link"

interface Card {
    icon: React.ReactNode
    title: string
    desc: string
    href: string
}

export const Card = ({
    icon,
    title,
    desc,
    href
}: Card) => {
    return (
        <Link href={href}>
            <div
                className="
                        select-none
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
        </Link>
    )
}