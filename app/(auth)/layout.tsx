import Image from "next/image"

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex">
            <div className="relative">
                <Image
                    src="/images/backgrounds/auth.jpg"
                    className="h-[100vh] w-[60vw] object-cover border-r-2 border-scooter-500"
                    width={7360}
                    height={4912}
                    alt="background authentication image"
                />
                <div
                    className="
                        absolute
                        text-white
                        w-fit
                        text-[2.5rem]
                        font-exo
                        font-medium
                        top-48
                        left-36
                        animate-fade-in

                        [&>div]:backdrop-blur
                        [&>div]:w-fit
                        [&>div]:px-3
                        [&>div]:py-1
                        [&>div]:rounded-3xl
                        [&>div]:bg-scooter-900/40
                        [&>div]:border
                        [&>div]:border-scooter-400
                    "
                >
                    <div>A vida é muito curta,</div>
                    <div className="ml-32">para não ter seu lugar especial.</div>
                </div>
            </div>
            {children}
        </main>
    )
}
