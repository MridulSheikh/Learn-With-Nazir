import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='container flex justify-center items-center mx-auto w-screen h-screen '>
        <div className='text-center'>
            <div className='text-5xl mb-5'>PAGE NOT <span className='text-primarymain'>FOUND</span></div>
            <div className='hover:underline'>
            <Link to="/">Please back to home</Link>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound