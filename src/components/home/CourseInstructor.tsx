import React from 'react'
import {motion} from 'framer-motion'

const firstInstructor = {
    hidden : {
        x: 250,
        opacity : 0
    },
    visible : {
        x: 0,
        opacity : 1,
        transition : {
            duration : 1.25
        }
    }
}
const secondInstructor = {
    hidden : {
        x: -250,
        opacity : 0
    },
    visible : {
        x: 0,
        opacity : 1,
        transition : {
            duration : 1.25
        }
    }
}

function CourseInstructor() {
    return (
        <div className='container pt-28 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
            <div className='text-center text-3xl font-bold mt-10'>
                <span className='text-primarymain'>Course</span> Instructor
            </div>
            <motion.div variants={firstInstructor} initial="hidden" animate="visible" className='grid text-center mx-auto lg:text-left md:grid-cols-2  mt-28  p-5'>
                <div className='flex items-end'>
                    <div className='w-44 mx-auto'>
                        <img src="https://www.coachdrparas.com/admin/blog/images/v1about-man-img.jpg" className='' alt="" />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='text-3xl font-bold '>
                        Mridul Sheikh
                    </div>
                    <div className='text-md mt-5'>
                        Mridul Sheikh is a front end developer. He live at Dhaka division in Bangladesh. Currently, his most preferred language is JavaScript. Apart from that, he has done some projects with React, MongoDB, Express, Tailwindcss, firebase. The main purpose is to work with web-technology And improve her skills.
                    </div>
                </div>
            </motion.div>
            <motion.div variants={secondInstructor} initial="hidden" animate="visible" className='grid text-center lg:text-right mx-auto md:grid-cols-2 mt-10 p-5'>
                <div className='w-44 lg:hidden mx-auto'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Kobe_Bryant_Profile.jpg/1200px-Kobe_Bryant_Profile.jpg" className='' alt="" />
                </div>
                <div className='mt-5'>
                    <div className='text-3xl font-bold '>
                        Asiq Rahaman
                    </div>
                    <div className='text-md mt-5'>
                        Asiq Rahaman is a front end developer. He live at Dhaka division in Bangladesh. Currently, his most preferred language is JavaScript. Apart from that, he has done some projects with React, MongoDB, Express, Tailwindcss, firebase.
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className='w-44 hidden lg:block mx-auto'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Kobe_Bryant_Profile.jpg/1200px-Kobe_Bryant_Profile.jpg" className='' alt="" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default CourseInstructor