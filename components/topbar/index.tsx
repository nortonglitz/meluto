import { Logo, Button } from "@/components"
import { Avatar } from "./avatar"
import { UserMenu } from "./user-menu"
import Link from "next/link"

export const Topbar = () => {
    return (
        <div
            className="
                flex
                justify-between
                py-2
                px-20
            "
        >
            <Link href="/auth/login">
                <Logo className="h-7" />
            </Link>
            <div className="flex space-x-4 items-center">
                <Button link >
                    Anuncie seu imóvel
                </Button>
                <UserMenu>
                    <Avatar />
                </UserMenu>
            </div>
        </div>
    )
}