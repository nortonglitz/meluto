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

    const handleLinkClick = () => {
        setMenuIsOpen(false)
    }

    const unauthMenu = (
        <>
            <li onClick={handleLinkClick} className="font-medium"><Link href="/auth/login">Entrar</Link></li>
            <hr className="my-2 dark:border-gray-700" />
            <li>Ajuda</li>
        </>
    )

    const authMenu = (
        <>
            <li className="font-medium"><FaSignHanging />Anúncios</li>
            <li className="font-medium"><FaHeart />Favoritos</li>
            <hr className="my-2 dark:border-gray-700" />
            <li>Ajuda</li>
            <li onClick={handleLinkClick}><Link href="/account/settings">Conta</Link></li>
            <li className="text-red-500" onClick={() => signOut()}>Sair</li>
        </>
    )

    const skeleton = (
        <>
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
            <hr className="my-4 dark:border-gray-800" />
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
        </>
    )

    return (
        <>
            <div
                className={`
                    ${menuIsOpen ? "sm:hidden fixed" : "hidden"}
                    top-0
                    left-0
                    right-0
                    bottom-0
                    backdrop-blur-sm
                `}
            />
            <ListenerClickOutside onClickOutside={() => setMenuIsOpen(false)}>
                <div className="sm:relative rounded-full">
                    <button className="rounded-full" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                        <Avatar
                            loading={status === "loading"}
                            src={data?.user?.image}
                        />
                    </button>
                    <div
                        className={`
                            ${menuIsOpen ? "block" : "hidden"}
                            border
                            overflow-hidden
                            shadow-md

                            fixed
                            bottom-0
                            right-1
                            left-1
                            rounded-t-xl
                            border-b-0

                            sm:absolute
                            sm:right-0
                            sm:left-auto
                            sm:bottom-auto
                            sm:top-[calc(100%_+_0.5rem)]
                            sm:w-fit
                            sm:rounded-b-xl
                            sm:min-w-44
                            sm:border-b

                            border-gray-200
                            bg-white

                            dark:border-gray-700
                            dark:bg-gray-900
                        `}
                    >
                        <ul
                            className="
                                text-nowrap

                                [&>li]:px-4
                                [&>li]:py-4
                                [&>li]:cursor-pointer
                                [&>li]:flex
                                [&>li]:items-center
                                [&>li>svg]:mr-2

                                py-2
                                text-xl

                                sm:[&>li]:py-2
                                sm:text-lg

                                [&>li:hover]:bg-gray-100
                                dark:[&>li:hover]:bg-gray-800
                            "
                        >
                            {status === "unauthenticated" && unauthMenu}
                            {status === "authenticated" && authMenu}
                            {status === "loading" && skeleton}
                        </ul>
                    </div>
                </div>
            </ListenerClickOutside>
        </>
    )
}