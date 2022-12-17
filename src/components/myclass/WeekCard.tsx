import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaAngleRight} from 'react-icons/fa'
import axios from 'axios'
import useAuth from '../../Hooks/useAuth'

interface props {
    name : string,
    id : string,
}

type weekInfo ={
  name : string,
  no : number,
}

function WeekCard({name, id} : props) {
  const [week, setWeek] = useState<weekInfo>()
  return (
    <div>
        <Link to={`/video/${id}`}>
            <div className='bg-white w-full py-2 shadow-md px-3 mt-3 flex items-center justify-between rounded-md'>
                <div>
                {name}
                </div>
                 <FaAngleRight />
            </div>
        </Link>
    </div>
  )
}

export default WeekCard