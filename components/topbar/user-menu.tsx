"use client"

import { ListenerClickOutside } from "@/components"
import Link from "next/link"
import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Avatar } from "./avatar"

export const UserMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { status, data } = useSession()

    const unauthMenu = (
        <>
            <li><Link href="/auth/login" className="font-medium">Entrar</Link></li>
            <hr className="my-2" />
            <li>Ajuda</li>
        </>
    )

    const authMenu = (
        <>
            <li className="font-medium">Anúncios</li>
            <li className="font-medium">Favoritos</li>
            <hr className="my-2" />
            <li>Ajuda</li>
            <li>Conta</li>
            <li className="text-red-500" onClick={() => signOut()}>Sair</li>
        </>
    )

    return (
        <ListenerClickOutside onClickOutside={() => setMenuIsOpen(false)}>
            <div className="relative rounded-full">
                <button className="rounded-full" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    <Avatar
                        loading={status === "loading"}
                        src={data?.user?.image}
                    />
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
                        min-w-32
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
                        {status === "unauthenticated" && unauthMenu}
                        {status === "authenticated" && authMenu}
                    </ul>
                </div>
            </div>
        </ListenerClickOutside>
    )
}