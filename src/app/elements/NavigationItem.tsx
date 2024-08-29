import React from 'react'
import { notoSansJavanese } from '../components/Footer'

type Props = {
    text: string
    icons?: React.ReactNode
    className?: string
    link?: string
}

export default function NavigationItem({ text, icons, link = "/", className, ...props }: Props) {
    return <a
        className={`${notoSansJavanese.className} font-[550] text-main-white hover:text-accent hover:-translate-y-1 text-xs lg:text-sm duration-300 ${className}`}
        href={link}
        {...props}
    >
        {icons}
        {text}
    </a>
}
