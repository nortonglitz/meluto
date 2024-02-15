import { Logo, Button } from "@/components"
import { Avatar } from "./avatar"
import { UserMenu } from "./user-menu"

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
            <Logo />
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