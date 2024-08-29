import React from 'react'
import { playfairDisplay } from '../page'

type Props = {
    className?: string
}

export default function Logo({ className, ...props }: Props) {
    return <a href="/" className={`${playfairDisplay.className} text-2xl lg:text-4xl font-semibold text-main-white ${className}`} {...props}>MNTN</a>
}
