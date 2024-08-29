"use client"
import React, { useState } from 'react'
import Logo from '../elements/Logo'
import NavigationItem from '../elements/NavigationItem'
import AccountIcon from '../elements/AccountIcon'

const navigationMenu = [
    {
        text: "Equipment"
    },
    {
        text: "About us"
    },
    {
        text: "Blog"
    }
]

export default function Header() {
    const [onHoverAccount, setOnHoverAccount] = useState(false)
    return (
        <header className='h-20 w-full flex lg:pt-10 px-7 lg:px-20 items-end absolute z-50 top-0 left-0 bottom-auto'>
            <section className='h-1/2 lg:h-2/5 w-full flex justify-between items-center'>
                <div>
                    <Logo />
                </div>
                <nav className='hidden sm:flex gap-3 lg:gap-14 h-full items-center'>
                    {
                        navigationMenu.map((navigation, index: number) => (
                            <NavigationItem
                                key={index}
                                text={navigation.text}
                            />
                        ))
                    }
                </nav>
                <div
                    className='h-full flex items-center gap-1 lg:gap-3 text-main-white hover:text-accent duration-200 cursor-pointer text-xs sm:text-base'
                    onMouseOver={() => setOnHoverAccount(true)}
                    onMouseLeave={() => setOnHoverAccount(false)}
                >
                    <AccountIcon fill={onHoverAccount ? "#fbd784" : "white"} />
                    <h2>Account</h2>
                </div>
            </section>
        </header>
    )
}
