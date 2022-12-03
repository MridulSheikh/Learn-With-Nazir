import React, { useState } from 'react'
interface props{
    title: string;
    body: string;
}
function AskCard({title, body}:props) {
    const [clicked, setClicked] = useState(false)
    return (
        <div onClick={() => setClicked(!clicked)} className='p-5 shadow-md mt-5 bg-white rounded-md'>
            <div className='text-md'>
                {title}
            </div>
            {
                clicked &&
                <div className='mt-6'>
                    {body}
                </div>
            }
        </div>
    )
        }
export default AskCard;