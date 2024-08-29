import Image from 'next/image'
import React from 'react'
import Rectangle from './Rectangle'
import ArrowDown from './ArrowDown'
import { notoSansJavanese, playfairDisplay } from '../page'

type Props = {
    contentNumber: number
    title: string,
    subTitle: string,
    description: string,
    link: string,
    image: string,
    className?: string
}

export default function ContentItem({ contentNumber, title, subTitle, description, link, image, className }: Props) {
    return (
        <section className={`min-h-screen sm:min-h-max lg:min-h-screen h-max w-full pt-7 lg:p-0 relative top-0 flex flex-col-reverse sm:flex-row gap-7 lg:gap-0 justify-around items-center text-white px-4 ${className}`}>
            <div className='flex flex-col w-11/12 lg:w-2/5 h-full gap-3 lg:gap-5 text-accent relative px-2'>
                <div className={`absolute -top-2 lg:-top-20 ${contentNumber % 2 === 0 ? "lg:-left-14" : "lg:-left-20"} text-white text-opacity-30 font-bold text-8xl lg:text-[11rem] ${notoSansJavanese.className}`}>
                    <h1>
                        0{contentNumber}
                    </h1>
                </div>
                <h2 className='flex gap-2 lg:gap-5 font-bold items-center text-sm lg:text-base'>
                    <Rectangle />
                    {title}
                </h2>
                <h3 className={`text-main-white text-4xl lg:text-7xl text-clip mb-7 ${playfairDisplay.className}`}>{subTitle}</h3>
                <p className="text-main-white leading-[2em] mb-7 text-justify">{description}</p>
                <a href={link} className='flex gap-5 hover:translate-x-1 duration-300 w-fit'>Read More
                    <span className='-rotate-90'>
                        <ArrowDown fill='#FBD784' />
                    </span>
                </a>
            </div>
            <Image src={image} alt={title} width={400} height={600} className='aspect-auto h-[60svh] sm:h-[50svh] lg:h-[100svh] w-5/6 sm:w-1/2 lg:w-auto object-cover overflow-clip' />
        </section>
    )
}
