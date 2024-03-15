import Image from "next/image"

export const PlaceHolder = () => {
    return (
        <div className="mt-16">
            <Image
                src="/illustrations/house-magnifying-glass.svg"
                width={997}
                height={465}
                alt="futuros anúncios"
                className="w-60 mt-24 sm:w-96 sm:mt-0"
                priority
            />
            <h2 className="font-exo text-xl italic mt-4 text-center">
                Seus imóveis aparecerão aqui
            </h2>
        </div>
    )
}