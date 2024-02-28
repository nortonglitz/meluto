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
            <div className="flex items-center text-lg">
                <Button link className="mr-4" color="secondary">
                    Anuncie seu imóvel
                </Button>
                <UserMenu />
            </div>
        </div>
    )
}