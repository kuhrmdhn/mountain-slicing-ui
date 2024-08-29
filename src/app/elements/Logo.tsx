import React from 'react'
import { Playfair_Display } from 'next/font/google'

type Props = {
    className?: string
}

export const playfairDisplay = Playfair_Display({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"]
})

export default function Logo({ className, ...props }: Props) {
    return <a href="/" className={`${playfairDisplay.className} text-2xl lg:text-4xl font-semibold text-main-white ${className}`} {...props}>MNTN</a>
}
