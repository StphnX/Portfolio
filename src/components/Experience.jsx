import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css-3.png'
import Javascript from '../assets/javascript.png'
import ReactImage from '../assets/react.png'
import NodeJS from '../assets/icons8-nodejs-240.png'
import SQL from '../assets/sql-server.png'
import GitHub from '../assets/GitHub.png'

function Experience() {


    const techs = [
        {
            id: 1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: NodeJS,
            title: 'NodeJS',
            style: 'shadow-green-500'
        },
        {
            id: 5,
            src: ReactImage,
            title: 'React',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: SQL,
            title: 'SQL',
            style: 'shadow-cyan-500'
        },
        {
            id: 7,
            src: GitHub,
            title: 'GitHub',
            style: 'shadow-stone-600'
        }
    ]



    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to to-black w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-6xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6 text-2xl'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {techs.map(({ id, src, title, style }) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>

                    ))}


                </div>

            </div>

        </div>
    )
}

export default Experience