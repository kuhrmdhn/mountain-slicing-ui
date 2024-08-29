import Image from 'next/image'
import React from 'react'
import ContentItem from '../elements/ContentItem'

const contentList = [
    {
        contentNumber: 1,
        title: "GET STARTED",
        subTitle: "What level of  hiker are you?",
        description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
        link: "/",
        image: "/images/get-started.png",
    },
    {
        contentNumber: 2,
        title: "HIKING ESSENTIALS",
        subTitle: "Picking the right Hiking Gear!",
        description: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
        link: "/",
        image: "/images/hiking.png",
    },
    {
        contentNumber: 3,
        title: "WHERE YOU GO IS THE KEY",
        subTitle: "Understand Your Map & Timing",
        description: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.",
        link: "/",
        image: "/images/compass.png",
    },

]

export default function Content() {
    return (
        <div className='bg-main relative z-[100] flex flex-col gap-[10svh] sm:gap-[20svh] lg:gap-[30svh]'>
            {
                contentList.map((content, index: number) => (
                    <ContentItem
                        key={index}
                        contentNumber={content.contentNumber}
                        title={content.title}
                        subTitle={content.subTitle}
                        description={content.description}
                        image={content.image}
                        link={content.link}
                        className={`${content.contentNumber === 2 ? "sm:flex-row-reverse" : "sm:flex-row"}`}
                    />
                ))
            }
        </div>
    )
}
