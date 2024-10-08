"use client"

import { Logo, Button } from "@/components"
import { UserMenu } from "./user-menu"
import Link from "next/link"
import { useOnWindowScroll } from "@/hooks"

export const Topbar = () => {

    const hideTopbar = useOnWindowScroll("down")

    return (
        <>
            <nav
                className={`
                    z-500
                    transition
                    fixed
                    ${hideTopbar ? "max-sm:-translate-y-full" : ""}
                    w-full
                    h-16
                    flex
                    justify-between
                    items-center
                    py-2
                    lg:px-20
                    md:px-10
                    px-5
                    top-0

                    dark:bg-gray-950
                    bg-white
                `}
            >
                <Link href="/" className="hidden md:block">
                    <Logo className="h-7" />
                </Link>
                <Link href="/" className="md:hidden">
                    <Logo small className="h-7" />
                </Link>
                <div className="flex items-center text-lg">
                    <Button variant="text" className="mr-4" color="secondary">
                        Anuncie seu imóvel
                    </Button>
                    <UserMenu />
                </div>
            </nav>
            <div className="h-[4.5rem]" />
        </>
    )
}