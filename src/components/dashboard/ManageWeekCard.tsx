import React from 'react'
import {BiEdit} from 'react-icons/bi'
import { Link } from 'react-router-dom'

type propsInfo = {
    name : string,
    id : string,
    video : [
      {
        name : string,
        id : string
      }
    ],
    no : number,
    course : {
        name : string,
        id : string,
    }
}

function ManageWeekCard({name, id, video, no, course} : propsInfo) {
  return (
    <div className='grid lg:grid-cols-8 py-2 text-sm px-2 border border-t-0 border-r-0 border-l-0'>
      <div className='col-span-1'>{no}</div>
      <div className='col-span-3'>{name}</div>
      <div className='col-span-3'>{course.name}</div>
      <div className='flext justify-end text-right col-span-1'>
        <Link to={`/dashboard/week/edit/${id}`}>
        <button className='text-2xl hover:text-primarymain'><BiEdit /></button>
        </Link>
      </div>
    </div>
  )
}

export default ManageWeekCard