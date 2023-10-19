import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora delectus earum ea maiores accusamus odio. Minima, est distinctio? Dolores consequatur sunt ab sit maiores,
                    soluta deleniti ipsum omnis, cum ipsam quis, qui culpa distinctio dolorem libero illum laboriosam suscipit incidunt labore facilis. Repudiandae ducimus autem nobis alias quae corrupti.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta cum quibusdam sequi doloremque magni culpa! Corrupti earum rem repellat asperiores delectus ipsa, voluptate ab et
                    qui facilis nobis recusandae architecto omnis veritatis rerum at consequuntur accusantium eveniet modi autem. Voluptates iure voluptatum voluptate unde. Exercitationem molestias deleniti quas voluptate!
                </p>
            </div>
        </div>
    )
}

export default About