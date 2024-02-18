import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

interface LogoProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    small?: boolean
}

export const Logo = ({
    small = false,
    ...props
}: LogoProps) => {

    if (small) {
        return (
            <img src="/images/logos/logo-small.webp" alt="meluto" {...props}/>
        )
    }

    return (
        <img src="/images/logos/logo.webp" alt="meluto" {...props}/>
    )
}