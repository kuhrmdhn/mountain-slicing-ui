"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Rectangle from '../elements/Rectangle'
import ArrowDown from '../elements/ArrowDown'
import SectionTransition from '../elements/SectionTransition'
import { playfairDisplay } from '../elements/Logo'


export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0)
    function scrollEvent() {
        const scrollYOffset = window.scrollY
        setScrollY(scrollYOffset)
    }

    useEffect(() => {
        if (window && window !== undefined) {
            window.addEventListener("scroll", scrollEvent)
        }
    }, [])
    return (
        <section className="w-full min-h-[90svh] bg-main lg:min-h-[150svh] h-max flex flex-col justify-center items-center relative">
            <div
                style={{
                    willChange: "transform",
                    transform: `translate3d(0px, ${scrollY / 5}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                    transformStyle: "preserve-3d",
                    opacity: 1 - scrollY / 700
                }}
                className={`absolute top-[40%] sm:top-[30%] lg:top-[15%] z-40 h-1/3 w-max flex flex-col justify-between sm:justify-around lg:justify-between px-3 py-5 font-bold lg:text-sm text-main-white duration-100`}>
                <h1 className='flex gap-3 lg:gap-7 items-center word-space-tagline tracking-[.3em] text-accent'>
                    <Rectangle />
                    A HIKING GUIDE
                </h1>
                <div className={`text-2xl sm:text-4xl lg:text-7xl ${playfairDisplay.className} h-max`}>
                    <h2>Be Prepared For The</h2>
                    <h2 className='mt-1 lg:mt-5'> Mountains And Beyond!</h2>
                </div>
                <h5 className='flex gap-2 lg:gap-5 items-center'>
                    scroll down
                    <ArrowDown />
                </h5>
            </div>
            <div className='absolute h-full w-full top-0'>
                <div className='absolute left-0 top-0 z-20 brightness-75 h-full w-full'>
                    <Image style={{
                        willChange: "transform",
                        transform: `translate3d(0px, -${scrollY / 20}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                        transformStyle: "preserve-3d"
                    }}
                        src={"/images/cloud.png"}
                        alt="Cloud"
                        width={1240}
                        height={1200}
                        className='w-[150vw] lg:w-[100svw] h-[80svh] lg:h-fit' />
                </div>
                <div className='absolute left-0 top-[60%] sm:top-[55%] lg:top-[25%] z-30 brightness-75'>
                    <Image style={{
                        willChange: "transform",
                        transform: `translate3d(0px, -${scrollY / 20}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                        transformStyle: "preserve-3d"
                    }}
                        src={"/images/mountain.png"}
                        alt="Mountain"
                        width={1240}
                        height={1200}
                        className='w-[100svh] lg:w-full h-[50svh] lg:h-fit' />
                </div>
                <div className='absolute left-0 top-[70%] sm:top-[60%] lg:top-[40%] z-[60] brightness-75'>
                    <Image style={{
                        willChange: "transform",
                        transform: `translate3d(0px, -${scrollY / 60}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                        transformStyle: "preserve-3d"
                    }}
                        src={"/images/ground.png"}
                        alt="Ground"
                        width={1240}
                        height={1200}
                        className='h-2/3 lg:h-auto lg:w-full' />
                </div>
            </div>
            <div className="absolute -bottom-[21%] lg:bottom-0 w-full h-2/5 sm:h-1/2 lg:h-2/5 z-[80]">
                <SectionTransition />
            </div>
        </section>
    )
}
