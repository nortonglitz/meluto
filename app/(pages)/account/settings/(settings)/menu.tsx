"use client"

import { usePathname } from "next/navigation"
import { FaAddressCard, FaRankingStar, FaWallet } from "react-icons/fa6"
import Link from "next/link"

interface MenuItem {
    icon: React.ReactNode
    title: string
    chosen?: boolean
    href: string
}

const MenuItem = ({
    chosen = false,
    icon,
    title,
    href
}: MenuItem) => {
    return (
        <Link
            href={href}
            className={`
                    ${chosen && "text-scooter-500 dark:text-scooter-300"}
                    ${!chosen && "text-gray-600 dark:text-gray-400"}

                    flex
                    items-center
                    text-nowrap
                    [&>svg]:mr-2
                    px-6
                    cursor-pointer
                    py-2

                    dark:hover:bg-gray-800
                    hover:bg-gray-100
                
                `}
        >
            {icon}
            {title}
        </Link>
    )
}

export const Menu = () => {

    const pathname = usePathname()

    return (
        <aside
            className="
                hidden
                md:block
                animate-fade-in
                relative
            "
        >
            <nav
                className="
                    sticky
                    top-10
                    rounded-xl
                    h-fit
                    border
                    shadow-md
                    py-4
                    max-w-64

                    border-gray-200
                    bg-gray-50

                    dark:border-gray-700
                    dark:bg-gray-900
                "
            >
                <MenuItem
                    icon={<FaAddressCard />}
                    title="Informações Pessoais"
                    chosen={pathname === "/account/settings/personal"}
                    href="/account/settings/personal"
                />
                <MenuItem
                    icon={<FaWallet />}
                    title="Financeiro"
                    chosen={pathname === "/account/settings/financial"}
                    href="/account/settings/financial"
                />
                <MenuItem
                    icon={<FaRankingStar />}
                    title="Plano"
                    chosen={pathname === "/account/settings/subscription"}
                    href="/account/settings/subscription"
                />
            </nav>
        </aside>
    )
}