import Image from "next/image"

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex">
            <div className="relative hidden md:block">
                <Image
                    className="
                        h-[100vh]
                        w-[70vw]
                        object-cover
                        border-r-2
                        border-scooter-500
                    "
                    src="/images/backgrounds/auth.jpg"
                    width={7360}
                    height={4912}
                    alt="background authentication image"
                />
                <div
                    className="
                        absolute
                        text-white
                        xl:text-[2.5rem]
                        lg:text-[2rem]
                        md:text-[1.5rem]
                        font-exo
                        font-medium
                        top-0
                        right-0
                        w-full
                        h-full
                        animate-fade-in

                        flex
                        flex-col
                        justify-center
                        items-center
                    "
                >
                    <div
                        className="
                            [&>div]:backdrop-blur
                            [&>div]:w-fit
                            [&>div]:px-3
                            [&>div]:py-1
                            [&>div]:rounded-2xl
                            [&>div]:bg-scooter-900/40
                            [&>div]:border
                            [&>div]:border-scooter-400
                        "
                    >
                        <div>A vida é muito curta,</div>
                        <div className="xl:ml-32 ml-4">para não ter seu lugar especial.</div>
                    </div>
                </div>
            </div>
            {children}
        </main>
    )
}
