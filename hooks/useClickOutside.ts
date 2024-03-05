"use client"

import { RefObject, useCallback, useEffect } from "react"

type EventType = "mousedown" | "mouseup" | "touchstart" | "touchend" | "pointerdown" | "pointerup"

/**
 * 
 * Hook to use for handling clicks outside a specified element.
 * 
 * @param handler Function to run on click outside
 * @param ref Target ref to watch click
 * @param eventType (optional) Event you want to listen
 * 
 * @example
 * const containerRef = useRef(null)
 * useOnClickOutside([containerRef], () => {
 *   // Handle clicks outside the container.
 * })
 */

export function useClickOutside<T extends HTMLElement = HTMLElement>(
    handler: (event: MouseEvent | TouchEvent) => void,
    ref: RefObject<T> | RefObject<T>[],
    eventType: EventType = "mousedown"
) {
    const listener = useCallback((event: MouseEvent | TouchEvent) => {
        const target = event.target as Node

        if (!target || !target.isConnected) {
            return
        }

        const isOutside = Array.isArray(ref)
            ? ref.every(r => r.current && !r.current.contains(target))
            : ref.current && !ref.current.contains(target)

        if (isOutside) {
            handler(event)
        }
    }, [handler, ref])

    useEffect(() => {
        document.addEventListener(eventType, listener)

        return () => {
            document.removeEventListener(eventType, listener)
        }
    })
}