import React from 'react'
import PageMoreInfo from '../elements/PageMoreInfo'
import Logo from '../elements/Logo'
import { Noto_Sans_Javanese } from 'next/font/google'

export const notoSansJavanese = Noto_Sans_Javanese({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["javanese", "latin"]
})

const pageInfo = [
  {
    title: "More on The Blog",
    section: "About MNTN",
    infoList: ["Contributors & Writers", "Write For Us", "Contact Us", "Privacy Policy"]
  },
  {
    title: "More on MNTN",
    section: "The Team",
    infoList: ["Jobs", "Press"]
  }
]

export default function Footer() {
  return (
    <footer className='bg-main min-h-[100svh] h-max min-w-full px-4 lg:p-0 text-main-white flex flex-col gap-7 lg:gap-0 lg:flex-row justify-evenly items-center text-xs sm:text-base'>
      <div className={`${notoSansJavanese.className} w-11/12 lg:w-2/5 h-1/3 flex flex-col justify-between`}>
        <section className='flex flex-col gap-7'>
          <Logo />
          <p className='leading-8'>Get out there & discover your next <br />slope, mountain & destination!</p>
        </section>
        <section className='text-gray-400'>
          <p>A concept by
            <a className='underline underline-offset-4 ml-1' href="https://krystonschwarze.com/" target='_blank' rel="noopener noreferrer">
              Kryston Schwarze
            </a>
          </p>
          <p>Open UI Design in 
            <a className='underline underline-offset-4 ml-1' href="https://www.figma.com/community/file/788675347108478517" target="_blank" rel="noopener noreferrer">
              Figma comunity
            </a>
          </p>
        </section>
      </div>
      <div className={`${notoSansJavanese.className} w-11/12 lg:w-2/5 h-1/3 flex flex-col gap-7 lg:gap-0 sm:flex-row justify-around`}>
        {
          pageInfo.map((info, index: number) => (
            <PageMoreInfo
              key={index}
              title={info.title}
              section={info.section}
              infoList={info.infoList}
            />
          ))
        }
      </div>
    </footer>
  )
}
