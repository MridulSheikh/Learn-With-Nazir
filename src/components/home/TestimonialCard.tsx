import React, { useState } from 'react'
import { AiOutlineRollback } from 'react-icons/ai';

interface props {
    name: string;
    body: string;
    email: string;
    sex: string;
}

function TestimonialCard({ name, body, email, sex }: props) {
    const sliceBody = body.slice(0, 100)
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-white p-5 mb-20 rounded-md drop-shadow-sm lg:h-96 '>
            <div className=' flex items-center justify-center '>
                <div className=' w-40 h-40 rounded-full overflow-hidden mx-11'>
                    {
                        sex === "men" ?
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9UI1y4Shr253ibETjPCOWNBWWpKgQsVKaw&usqp=CAU" alt="man-img" />
                            :
                            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="man-img" />
                    }
                </div>
            </div>
            <div className='mt-7'>
                <div className='text-center'>
                    <h1 className=' font-bold '>{name}</h1>
                    <p className='text-sm'>{email}</p>
                </div>
                <p className='mt-4 text-center'>{sliceBody}.....<button className='text-primarymain' onClick={() => setOpen(true)}>see more</button></p>
            </div>
            {open &&
                <div className='absolute top-0 h-full p-5 bg-white'>
                    <button onClick={() => setOpen(false)}><AiOutlineRollback /></button>
                    <div className='mt-5 overflow-y-scroll h-72 scroll-smooth'>
                        {body}
                    </div>
                </div>
            }
        </div>
    )
}

export default TestimonialCard