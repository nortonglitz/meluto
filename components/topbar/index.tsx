import { Logo, Button } from "@/components"
import { UserMenu } from "./user-menu"
import Link from "next/link"

export const Topbar = () => {
    return (
        <div
            className="
                flex
                justify-between
                items-center
                py-2
                lg:px-20
                md:px-10
                px-5
            "
        >
            <Link href="/" className="hidden md:block">
                <Logo className="h-7" />
            </Link>
            <Link href="/" className="md:hidden">
                <Logo small className="h-7" />
            </Link>
            <div className="flex space-x-2 items-center text-lg md:space-x-4">
                <Button link>
                    Anuncie seu imóvel
                </Button>
                <UserMenu />
            </div>
        </div>
    )
}