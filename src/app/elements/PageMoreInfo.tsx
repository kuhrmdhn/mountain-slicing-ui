import React from 'react'

type Props = {
    title: string
    section: string
    infoList: string[]
}

export default function PageMoreInfo({ title, section, infoList }: Props) {
    return (
        <div>
            <h3 className="text-accent font-bold text-2xl mb-7">{title}</h3>
            <ul className="flex flex-col gap-5">
                <h4>{section}</h4>
                {
                    infoList.map((info: string, index: number) => (
                        <li key={index}>
                            <a href='/' className="text-main-white hover:text-accent duration-300">{info}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
