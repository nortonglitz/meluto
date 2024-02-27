import { Topbar } from "@/components"

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Topbar />
            {children}
        </>
    )
}
