import { Menu } from "./menu"

export default function AccountSettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-center">
            <div className="flex justify-center gap-10 m-5 sm:m-10 max-w-[70rem] flex-grow">
                <Menu />
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </main>
    )
}
