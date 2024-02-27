"use client"

import { ListenerClickOutside } from "@/components"
import Link from "next/link"
import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Avatar } from "./avatar"
import { FaHeart } from "react-icons/fa"
import { FaSignHanging } from "react-icons/fa6"

export const UserMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { status, data } = useSession()

    const unauthMenu = (
        <>
            <li><Link href="/auth/login" className="font-medium">Entrar</Link></li>
            <hr className="my-2 dark:border-gray-800" />
            <li>Ajuda</li>
        </>
    )

    const authMenu = (
        <>
            <li className="font-medium"><FaSignHanging />Anúncios</li>
            <li className="font-medium"><FaHeart />Favoritos</li>
            <hr className="my-2 dark:border-gray-800" />
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
                        top-[calc(100%_+_0.5rem)]
                        border
                        rounded-xl
                        overflow-hidden
                        shadow-md
                        min-w-32

                        border-gray-200

                        dark:border-gray-800
                    `}
                >
                    <ul
                        className="
                            text-nowrap
                            py-2

                            [&>li]:px-4
                            [&>li]:py-2
                            [&>li]:cursor-pointer
                            [&>li]:flex
                            [&>li]:items-center
                            [&>li>svg]:mr-2

                            [&>li:hover]:bg-gray-100
                            dark:[&>li:hover]:bg-gray-900
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