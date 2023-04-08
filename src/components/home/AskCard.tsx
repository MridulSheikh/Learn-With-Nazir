import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
interface props{
    title: string;
    body: string;
}
function AskCard({title, body}:props) {
    const [clicked, setClicked] = useState(false)

    const paraVariants = {
        hidden : {
            opacity : 0,
        },
        visible : {
            opacity : 1,
            transition : {
                duration : 0.70
            }
        }
    }

    return (
        <div onClick={() => setClicked(!clicked)}  className={`p-5  mt-5 ${!clicked && 'bg-white shadow-md' } ease-in duration-200 rounded-md`}>
            <div className='text-lg  font-bold flex justify-between'>
                <p>{title}</p>
                <motion.button initial={{rotate: -250}} animate={{rotate: 0}} transition={{duration : 0.50, delay: 0.70}}>
                    {
                        !clicked ? 
                        <AiOutlinePlus className='font-bold text-primarymain text-xl' />
                        :
                        <AiOutlineMinus className='font-bold text-primarymain text-xl' />
                    }
                </motion.button>
            </div>
            {
                clicked &&
                <motion.div variants={paraVariants} initial="hidden" animate="visible" className='mt-6'>
                    {body}
                </motion.div>
            }
        </div>
    )
        }
export default AskCard;