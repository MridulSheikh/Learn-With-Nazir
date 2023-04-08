import { faq } from '../../fakedata/FAQ'
import AskCard from './AskCard'
import {motion} from 'framer-motion'

const parentVarients = {
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

function FequendlyAskQuistion() {
    return (
        <div className='container pt-10 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
            <div className='text-center text-3xl font-bold mt-10'>
                Frequently Asked <span className='text-primarymain'>Questions</span>
            </div>
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