import React from 'react'

function CourseDetails() {
    return (
        <div className='container pt-10 px-5 xl:px-0 xl:max-w-screen-lg mx-auto' >
            <h1 className='text-center text-3xl font-bold '>What will you learn from this course</h1>
            <div className='pt-10 xl:pt-28 lg:grid grid-cols-2 gap-6'>
                <div className='bg-white relative mt-7 lg:mt-0 shadow-md p-5 rounded-md'>
                    <div className='w-10 bg-primarymain h-10 rounded-full animate-ping opacity-40 -left-10 top-10 z-30 absolute' />
                    By watching a few videos, you will learn HTML, CSS and create two beautiful websites. And you can share those links with anyone.
                </div>
                <div />
                <div />
                <div className='bg-primarymain text-white mt-7 lg:mt-0 shadow-md p-5 rounded-md relative'>
                    <div className='w-10 bg-white h-10 rounded-full animate-ping opacity-40 -left-10 top-10 z-30 absolute' />
                    The popular framework called Bootstrap will iron out the details. Then he will make two e-commerce websites with that. What fun!
                </div>
                <div />
                <div />
                <div className='bg-white relative shadow-md mt-7 lg:mt-0 p-5 rounded-md'>
                    <div className='w-10 bg-primarymain h-10 rounded-full animate-ping opacity-40 -left-10 top-10 z-30 absolute' />
                    Six Main Things of JavaScript, Problem Solving with JavaScript, Interview Questions and Answers. Even make your knowledge relevant with ES6
                </div>
                <div />
                <div />
                <div className='bg-primarymain relative text-white mt-7 lg:mt-0 shadow-md p-5 rounded-md'>
                    <div className='w-10 bg-white h-10 rounded-full animate-ping opacity-40 -left-10 top-10 z-30 absolute' />
                    Concept of server, loading JSON data by calling REST API, debugging with node, mongodb (database), chrome devtool will be given.
                </div>
                <div />
                <div />
                <div className='bg-white shadow-md relative mt-7 lg:mt-0 p-5 rounded-md'>
                    <div className='w-10 bg-primarymain h-10 rounded-full animate-ping opacity-40 -left-10 top-10 z-30 absolute' />
                    Firebase Authentication, TypeScript, Sass, Tailwind, Google Map api and many other essential tools will be introduced for work needs.
                </div>
                <div />
                <div />
                <div className='bg-primarymain relative text-white mt-7 lg:mt-0 shadow-md p-5 rounded-md'>
                    <div className='w-10 bg-white h-10 rounded-full animate-ping opacity-40 -left-10 top-10 z-30 absolute' />
                    Complete professional website with React. 100% client-ready website will be created with database, server side, hosting, payment system, login, routing.
                </div>
            </div>
        </div>
    )
}

export default CourseDetails