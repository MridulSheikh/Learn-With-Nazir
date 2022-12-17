import { BsFillTelephoneFill,BsFacebook} from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

function Footer() {
    return (
        <div className='bg-white shadow-md mt-16 border pt-5'>
            <div className='container grid text-center lg:text-left lg:grid-cols-3 lg:gap-10 mb-5 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
                <div>
                    <div>
                        <div className='font-bold flex items-center'> <img src="/img/logo.png" className='w-10 mr-3' alt="" /> <span className='mr-1'>Learn With</span> <span className='text-primarymain'>Nazir</span></div>
                        <div className='flex items-center mt-4 text-sm font-semibold'> <BsFillTelephoneFill className='mr-3' /> Helpline : 01883992408</div>
                        <div className='flex items-center mt-1 text-sm font-semibold'> <ImLocation2 className='mr-3' /> Level-4, 34, kalabagan, Dhaka</div>
                        <div className='flex items-center mt-1 text-sm font-semibold'> <MdEmail className='mr-3' /> support : learnwithnazir@gmail.com</div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2'>
                    <div>

                    </div>
                    <div className='font-semibold'>
                        <div><Link to="/">Home</Link></div>
                        <div className='mt-2'><Link to="/support">Support</Link></div>
                        <div className='mt-2'><Link to="/myClass">Class</Link></div>
                        <div className='mt-2'><Link to="/blog">blog</Link></div>
                    </div>
                </div>
                <div>
                    <div className='text-md font-semibold text-center'>Follow us</div>
                    <div className='mt-2 flex gap-2 justify-center hover:cursor-pointer'>
                        <BsFacebook className='text-2xl text-blue-700' />
                        <AiFillInstagram className='text-2xl' />
                        <AiFillLinkedin className='text-2xl text-blue-700' />
                        <AiFillYoutube className='text-2xl text-red-500 ' />
                    </div>
                </div>
            </div>
            <div className='text-center bg-primarymain text-white py-2'>
                <div className='text-sm'>Copyright © 2022 Learn-with-nazir.com</div>
            </div>
        </div>
    )
}

export default Footer