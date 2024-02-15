"use client"

import { useRef, useEffect } from "react"

interface ListenerClickOutsideProps {
    children: React.ReactNode
    onClickOutside: () => void
}

export const ListenerClickOutside = ({
    children,
    onClickOutside
}: ListenerClickOutsideProps) => {

    const wrapperRef = useRef<HTMLDivElement>(null)
    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                onClickOutside()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [wrapperRef, onClickOutside])

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    )
}