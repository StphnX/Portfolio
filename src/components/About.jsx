import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 flex flex-col justify-center items-center'>
                    <p className='text-6xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-2xl mt-20 text-center'>One of my first encounters with the IT fields was when I was barely 10 years old and got my first computer.
                    From this point I was absorbed by the world of information technology.
                    As I grew up and until now I made different experiences from IT customer service, over building hardware and maintaining it to now finally Web Development where my heart is fulfilled.
                </p>

                <p className='text-2xl mt-20 mb-20 text-center'>
                    Before my Bootcamp at WBS Coding School it felt like I was on a search for the right fit for me in the IT industry and finally found my passion.
                    I always worked with people from different backgrounds and professions throughout these interactions I've learned that a good communication is the core of every successful work progress and project.
                </p>
                <br />
                <p className='text-2xl text-center'>
                    Thanks to the bootcamp I was able to find the right fit for me and I am looking forward to going further into the world of Web Development especially the Backend of it.
                    I love being able to create and maintain the backbone for everything to work properly.

                    If you'd like to reach out to me about hiring or maybe just talking about related topics feel free to contact me freely . I am always open for a conversation and meeting new people.
                </p>
            </div>
        </div>
    )
}

export default About