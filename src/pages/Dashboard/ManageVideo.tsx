import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ManageVideoCard from '../../components/dashboard/ManageVideoCard'
import Loading from '../../components/shared/Loading'
import useAuth from '../../Hooks/useAuth'
import DashboardLayout from './DashboardLayout'

type videoInfo = {
    name : string,
    src : string,
    _id :string,
    serialNumber : number,
    week : {
        name : string,
        id : string
    },
    author : {
        name: string,
        email : string
    },
    createdAt : string,
    updatedAt : string
}

function ManageVideo() {
    const {loading, setLoading} = useAuth()
    const [video, setVideo] = useState<videoInfo[]>()
    const [searchValue, setSearchVlue] = useState<string>()

    useEffect(()=>{
        setLoading(true)
        axios.get("http://localhost:5000/api/v1/video")
        .then(res => setVideo(res.data.body))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))
    },[])

    const reset = () =>{
        setLoading(true)
        axios.get("http://localhost:5000/api/v1/video")
        .then(res => setVideo(res.data.body))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))
    }

    const search = () =>{
       setLoading(true)
       const filterVideo = video?.filter(vd => vd.name === searchValue)
       setVideo(filterVideo)
       setLoading(false)
    }

  return (
    <div>
        <DashboardLayout>
        {loading ? (
          <Loading />
        ) : (
          <div className="mt-5">
            <div className="text-center text-hscolor font-bold text-2xl">
              Manage Video
            </div>
            <div className="bg-white flex justify-between rounded-full shadow-md md:w-5/12 mx-auto mt-5">
              <input
                onBlur={(e)=>setSearchVlue(e.target.value)}
                type="text"
                placeholder="Enter the video name for search"
                className="px-3 rounded-full w-full"
              />
              <button onClick={search} className="bg-primarymain text-white px-3 py-2 rounded-full hover:bg-blue-600 ">
                search
              </button>
            </div>
            <button onClick={reset} className="bg-green-500 text-white text-xs p-3 rounded-md">refresh</button>
            <div className="bg-white p-5 rounded-md shadow-md mt-5">
              <div className="grid lg:grid-cols-8 bg-primarymain py-2 px-2 text-white mb-2">
                <div className="col-span-2">Name</div>
                <div className="col-span-2">date</div>
                <div className="col-span-2">week</div>
                <div className="col-span-1">Edit</div>
                <div className="flex justify-end text-2xl col-span-1">
                  <Link to="/dashboard/video/add">
                    <button>
                      <AiOutlinePlusCircle />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="overflow-y-scroll h-screen">
                {
                    video?.map(vd => <ManageVideoCard name={vd?.name} week={vd?.week.name} id={vd?._id} date={vd?.updatedAt} />)
                }
              </div>
            </div>
          </div>
        )}
        </DashboardLayout>
    </div>
  )
}

export default ManageVideo