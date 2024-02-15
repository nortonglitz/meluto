type LogoProps = {
    extended?: boolean
}

export const Logo = ({
    extended = false
}: LogoProps) => {

    if (!extended) {
        return (
            <img src="/images/logos/logo192.webp" alt="meluto" className="h-10" />
        )
    }

    return (
        <div>
            Logo
        </div>
    )
}