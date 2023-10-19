import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill, BsFillPersonLinesFill } from 'react-icons/bs'

export const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com/in/stephan-eckart',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/StphnX',

        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:StephanEckart@outlook.com',

        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonFill size={30} />
                </>
            ),
            href: '/StephanEckart.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]

    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({ id, child, href, style, download }) => (

                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500' + " " + style}>
                        <a href={href} className='flex justify-between items-center w-full text-white'
                            download={download}
                            target='_blank'
                        >

                            {child}
                        </a>
                    </li>
                ))}


            </ul>
        </div>
    )
}
