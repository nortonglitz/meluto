import { Topbar } from "@/components"

export default function PagesLayout({
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
