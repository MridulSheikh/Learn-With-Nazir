import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

type videoInfo = {
    name : string,
    week : string,
    id : string,
    date : string
}

function ManageVideoCard({name, week, id ,date} : videoInfo) {
    const [loading, setLoading] = useState<boolean>(false)
    const [weeks, setWeeks] = useState({})

    const deleteVideo = () =>{
          setLoading(true)
          axios.delete(`https://learn-with-nazir-server-run.onrender.com/api/v1/video/${id}`)
          .then(res => {
            alert(res.data.message)
          })
          .catch(error=>{
            console.log(error)
          })
          .finally(()=>setLoading(false))
    }
  return (
    <div className="grid lg:grid-cols-8 py-2 px-2 border border-t-0 border-l-0 border-r-0 mb-2 text-sm">
      <div className="col-span-2">{name}</div>
      <div className="col-span-2">{new Date(date).toLocaleString()}</div>
      <div className='col-span-2'>{week}</div>
      <div className="col-span-1">
        <Link to={`/dashboard/video/${id}`}>
          <button className="text-2xl hover:text-primarymain">
            <BiEdit />
          </button>
        </Link>
      </div>
      <div className="flex justify-center text-2xl col-span-1">
        {
          loading ?
          <div className='text-xs text-red-500'>deleting.....</div>
          :
          <button onClick={deleteVideo} className="hover:text-red-500"><MdDeleteOutline /></button>
        }
      </div>
    </div>
  )
}

export default ManageVideoCard