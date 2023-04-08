import { faq } from '../../fakedata/FAQ'
import AskCard from './AskCard'

function FequendlyAskQuistion() {
   
    return (
        <div className='container pt-10 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
            <div className='text-center text-3xl font-bold mt-10'>
                Frequently Asked <span className='text-primarymain'>Questions</span>
            </div>
            <div className='grid md:grid-cols-5 gap-6 mt-20'>
                <div className='col-span-3'>
                    {
                        faq.map(fq => <AskCard key={fq.title} title={fq.title} body={fq.body} /> )
                    }
                </div>
                <div className='col-span-2 relative'>
                    <img src="/img/faq.png" className='w-full h-full object-contain my-auto' alt="faq" />
                </div>
            </div>
        </div>
    )
}

export default FequendlyAskQuistion