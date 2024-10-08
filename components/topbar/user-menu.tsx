"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { useSession, signOut } from "next-auth/react"
import { ButtonAvatar } from "./button-avatar"
import { FaHeart } from "react-icons/fa"
import { FaSignHanging } from "react-icons/fa6"
import { useClickOutside } from "@/hooks"

export const UserMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { status } = useSession()

    const handleLinkClick = () => {
        setMenuIsOpen(false)
    }

    const menuRef = useRef(null)
    useClickOutside(() => setMenuIsOpen(false), menuRef)

    const unauthMenu = (
        <ul>
            <Link href="/auth/login"><li onClick={handleLinkClick} className="font-medium">Entrar</li></Link>
            <hr className="my-2 dark:border-gray-700" />
            <li>Ajuda</li>
        </ul>
    )

    const authMenu = (
        <ul>
            <Link href="/listings/properties/residential"><li className="font-medium"><FaSignHanging />Anúncios</li></Link>
            <li className="font-medium"><FaHeart />Favoritos</li>
            <hr className="my-2 dark:border-gray-700" />
            <li>Ajuda</li>
            <Link href="/account/settings"><li onClick={handleLinkClick}>Conta</li></Link>
            <li className="text-red-500" onClick={() => signOut()}>Sair</li>
        </ul>
    )

    const skeleton = (
        <ul>
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
            <hr className="my-4 dark:border-gray-800" />
            <li className="sm:w-[10rem] bg-gray-800 mx-4 my-4 rounded-full animate-pulse" />
        </ul>
    )

    return (
        <>
            <div
                onWheel={() => setMenuIsOpen(false)}
                onTouchStart={() => setMenuIsOpen(false)}
                className={`
                    ${menuIsOpen ? "sm:hidden fixed" : "hidden"}
                    top-0
                    left-0
                    right-0
                    bottom-0
                    bg-black/80
                    z-[599]
                `}
            />
            <div className="sm:relative" ref={menuRef}>
                <ButtonAvatar onClick={() => setMenuIsOpen(!menuIsOpen)} />
                <div
                    className={`
                        ${menuIsOpen ? "block" : "hidden"}
                        border
                        overflow-hidden
                        shadow-md
                        z-600

                        fixed
                        bottom-0
                        right-1
                        left-1
                        rounded-t-3xl
                        border-b-0

                        sm:absolute
                        sm:right-0
                        sm:left-auto
                        sm:bottom-auto
                        sm:top-[calc(100%_+_0.5rem)]
                        sm:w-fit
                        sm:rounded-b-3xl
                        sm:min-w-44
                        sm:border-b

                        border-gray-200
                        bg-gray-50

                        dark:border-gray-700
                        dark:bg-gray-900
                    `}
                >
                    <nav
                        className="
                            text-nowrap

                            [&_li]:px-4
                            [&_li]:py-4
                            [&_li]:cursor-pointer
                            [&_li]:flex
                            [&_li]:items-center
                            [&_li>svg]:mr-2

                            py-2
                            text-xl

                            sm:[&_li]:py-2
                            sm:text-lg

                            [&_li:hover]:bg-gray-100
                            dark:[&_li:hover]:bg-gray-800
                        "
                    >
                        {status === "unauthenticated" && unauthMenu}
                        {status === "authenticated" && authMenu}
                        {status === "loading" && skeleton}
                    </nav>
                </div>
            </div>
        </>
    )
}