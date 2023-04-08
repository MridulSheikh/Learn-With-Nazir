import { faq } from '../../fakedata/FAQ'
import AskCard from './AskCard'
import {motion} from 'framer-motion'

const parentVarients = {
    hidden : {
        opacity : 0,
      },
      visible : {
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

function FequendlyAskQuistion() {
    return (
        <div className='container pt-10 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
            <motion.div className='text-center text-3xl font-bold mt-10' initial={{y: -125}} animate={{y: 0}} transition={{duration : 0.67, delay : 0.25}}>
                Frequently Asked <span className='text-primarymain'>Questions</span>
            </motion.div>
            <div className='mt-20'>
                <motion.div variants={parentVarients} initial="hidden" animate="visible" className='col-span-3'>
                    {
                        faq.map(fq => <AskCard key={fq.title} title={fq.title} body={fq.body} /> )
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default FequendlyAskQuistion