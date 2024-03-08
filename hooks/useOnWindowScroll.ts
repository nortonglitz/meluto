"use client"
import { useEffect, useState } from "react"

/**
 * Hook to hide element on scroll
 * @param direction Scroll direction to hide element
 * @returns Boolean when to hide element
 * 
 * @example
 * 
 * const hideElementOnScrollDown = useOnWindowScroll("down")
 * 
 * <div style={`${hideElementOnScrollDown} ? "hidden" : "block"`}/>
 */

export function useOnWindowScroll(direction: "down" | "up") {
    const [prevScrollY, setPrevScrollY] = useState(0)
    const [show, setShow] = useState(false)

    const hideOnScrollHandler = () => {
        const currentScrollY = window.scrollY

        if (direction === "up") {
            currentScrollY > prevScrollY ? setShow(false) : setShow(true)
        } else {
            prevScrollY > currentScrollY ? setShow(false) : setShow(true)
        }

        setPrevScrollY(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", hideOnScrollHandler, { passive: true })

        return () => window.addEventListener("scroll", hideOnScrollHandler, { passive: true })
    })

    return show
}