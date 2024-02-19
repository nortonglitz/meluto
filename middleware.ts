
import { NextResponse } from "next/server"
import { auth } from "./auth"

export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isAuthRoute = nextUrl.pathname.startsWith("/auth")

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect("/")
        }
        return NextResponse.next()
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}