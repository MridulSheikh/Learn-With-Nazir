import {Link} from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
import {motion} from "framer-motion"

const titleVarients = {
    hidden : {
        x: -250,
        opacity : 0,
      },
      visible : {
        x: 0,
        opacity : 1,
        transition: {
            type: "spring",
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4,
          },
      }
}

const imgVarients = {
    hidden : {
        x: 250,
        opacity : 0,
      },
      visible : {
        x: 0,
        y: [0, -20],
        opacity : 1,
        transition: {
            duration : 1,
            delay : 0.70,
            y: {
                yoyo : Infinity,
            }
          },
      }
}

const childrenVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  };

function HomeBanner() {
    return (
        <div className='relative overflow-hidden'>
            <img src="/img/pattern/pattern.png" alt="" className='absolute w-16 top-16 opacity-10' />
            <img src="/img/pattern/pattern.png" alt="" className='absolute w-16 bottom-16 -right-6 opacity-10 ' />
            <div className='w-40 bg-primarymain h-40 rounded-full absolute -left-10 -top-20 opacity-40' />
            <div className='w-16 bg-primarymain h-16 rounded-full absolute -right-10 top-40 opacity-10' />
            <div className='w-10 bg-primarymain h-10 rounded-full absolute right-36 animate-ping bottom-16 opacity-10 z-50' />
            <img src="/img/pattern/pattern.png" alt="" className='absolute w-7 h-7 top-32 rounded-full right-9 opacity-10' />
            <div className='container px-5 xl:px-0 xl:max-w-screen-lg mx-auto flex items-center'>
                <div className='md:grid grid-cols-2 py-16'>
                    <motion.div variants={titleVarients} initial="hidden" animate="visible">
                        <motion.h1 variants={childrenVarients} className=' text-3xl lg:text-5xl font-bold xl:leading-tight z-40'>Complete Web Development Course With Nazir</motion.h1>
                        <motion.p variants={childrenVarients} className='text-sm text-smallthin my-7'>Come and enjoy effective web dev learning process. Enjoy unlimited coding support, day concecptual session suport.After finished course get fond job.</motion.p>
                        <motion.div variants={childrenVarients} className='flex'>
                        <Link to="/myclass"><button className=' bg-primarymain text-white px-5 py-2 rounded-md hover:bg-transparent hover:border-primarymain border-2 hover:text-primarymain ease-in-out duration-300'>start free</button></Link>
                        <a href="https://youtu.be/l1EssrLxt7E" target="_blank">
                        <button className='text-red-700 font-bold ml-5 flex gap-2 items-center'>
                            <AiFillYoutube className='text-4xl' />
                            Watch video
                        </button>
                        </a>
                        </motion.div>
                    </motion.div>
                    <div className='mt-10 xl:mt-0'>
                        <motion.img variants={imgVarients} initial="hidden" animate="visible" src="/img/manprogramming2.png" className='m-auto z-50 ' alt="manprogramming" width="70%" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner