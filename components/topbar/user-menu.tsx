"use client"

import { ListenerClickOutside } from "@/components"
import Link from "next/link"
import { useState } from "react"

interface UserMenuProps {
    children: React.ReactNode
}

export const UserMenu = ({
    children
}: UserMenuProps) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <ListenerClickOutside onClickOutside={() => setMenuIsOpen(false)}>
            <div className="relative rounded-full">
                <button className="rounded-full" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    {children}
                </button>
                <div
                    className={`
                        ${menuIsOpen ? "block" : "hidden"}
                        absolute
                        right-0
                        top-[100%]
                        border
                        border-gray-200
                        rounded-xl
                        overflow-hidden
                        shadow-md
                    `}
                >
                    <ul
                        className="
                            text-nowrap
                            py-2

                            [&>li]:px-4
                            [&>li]:py-2
                            [&>li]:cursor-pointer

                            [&>li:hover]:bg-gray-100
                        "
                    >
                        <li>
                            <Link href="/auth/login">Entrar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </ListenerClickOutside>
    )
}