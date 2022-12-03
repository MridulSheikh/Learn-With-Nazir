import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navigation() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='py-3 bg-white z-50 drop-shadow-sm sticky top-0'>
            <div className='flex justify-between container px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
                <div>
                    <Link to="/">
                        <img src="/img/logo.png" alt="logo" className='w-16 m-auto' />
                    </Link>
                </div>
                <button className='xl:hidden text-2xl text-primarymain transition duration-300 ease-in-out' onClick={()=>setOpen(!open)}><GiHamburgerMenu /></button>
                <div className='hidden xl:flex justify-between items-center text-md font-bold text-hscolor'>
                    <Link to="/"><p className='mx-5 transition duration-300 ease-in-out hover:text-primarymain'>My Classes</p></Link>
                    <Link to="/"><p className='mr-5 transition duration-300 ease-in-out hover:text-primarymain'>Suport</p></Link>
                    <Link to="/"><p className='mr-5 transition duration-300 ease-in-out hover:text-primarymain'>Blog</p></Link>
                    <div className='flex items-center'>
                        <Link to="/"><button className='mx-2 bg-primarymain text-white px-5 py-2 rounded-full'>Login</button></Link>
                        <Link to="/"><button className='mx-2 border-2 border-primarymain px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-primarymain hover:text-white'>Registration</button></Link>
                    </div>
                </div>
            </div>
            { open &&
                    <div className='fixed transition xl:hidden duration-300 ease-in-out bg-white text-center w-screen h-screen text-md font-bold text-hscolor'>
                        <Link to="/"><p className='transition mt-10 duration-300 ease-in-out hover:text-primarymain'>My Classes</p></Link>
                        <Link to="/"><p className='transition mt-5 duration-300 ease-in-out hover:text-primarymain'>Suport</p></Link>
                        <Link to="/"><p className='transition mt-5 duration-300 ease-in-out hover:text-primarymain'>Blog</p></Link>
                        <div className='text-center mt-5'>
                            <Link to="/"><button className='bg-primarymain text-white px-5 py-2 rounded-full'>Login</button></Link>
                            <br />
                            <Link to="/"><button className='mt-2 border-2 border-primarymain px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-primarymain hover:text-white'>Registration</button></Link>
                        </div>
                    </div>
                }
        </div>
    )
}

export default Navigation