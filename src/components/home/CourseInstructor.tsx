import React from 'react'

function CourseInstructor() {
    return (
        <div className='container pt-28 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
            <div className='text-center text-3xl font-bold mt-10'>
                <span className='text-primarymain'>Course</span> Instructor
            </div>
            <div className='grid text-center mx-auto lg:text-left md:grid-cols-2 lg:w-9/12 mt-28 bg-white p-5 rounded-md shadow-md'>
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
            </div>
            <div className='grid text-center lg:text-right mx-auto md:grid-cols-2 lg:w-9/12 mt-10 bg-white p-5 rounded-md shadow-md'>
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
            </div>
        </div>
    )
}

export default CourseInstructor