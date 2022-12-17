import React, { useState, useEffect } from "react";
import DashboardLayout from "../../pages/Dashboard/DashboardLayout";
import { useForm } from "react-hook-form";
import { MdDone } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

type videoInfo = {
  name : string,
  src : string,
  serialNumber : number,
  week : {
      name : string,
      id : string
  }
}

type weekInfo = {
  name : string,
  week : [{
    name : string,
    id : string
  }]
}

type singleWeek = {
  name : string,
  id  : string,
}


function AddVideo() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<videoInfo>();
  const [success, setSuccess] = useState<string>()
  const {loading, setLoading, user} = useAuth()
  const [course, setCourse] = useState<weekInfo[]>()
  const [week, setWeek] = useState<singleWeek>()
  
  useEffect(()=>{
    setLoading(true)
    axios.get("https://learn-with-nazir-server-run.onrender.com/api/v1/course")
    .then(res => {
      setCourse(res.data.body)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(()=>setLoading(false))
   },[])

  const postVideo = (data : videoInfo) =>{
      setLoading(true)
      const body = {
        name : data.name,
        src : data.src,
        serialNumber : data.serialNumber,
        week : {
          name : week?.name,
          id : week?.id
        },
        author : {
          name : user.name,
          email : user.email
        }
      }
      axios.post("https://learn-with-nazir-server-run.onrender.com/api/v1/video", body)
      .then(res =>{
        setSuccess(res.data.message)
      })
      .finally(()=>setLoading(false))
  }


  return (
    <div>
      <DashboardLayout>
        <div className="mt-5">
          <div className="text-center font-bold text-hscolor text-2xl">
            Add video
          </div>
          <div>
            <form onSubmit={handleSubmit(postVideo)}>
              <div>
                <label className="text-xs" htmlFor="">
                  *Name
                </label>
                <br />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    please enter a valid name
                  </p>
                )}
                <input
                  {...register("name", {
                    required: true
                  })}
                  className="border w-full rounded-sm px-3 py-1"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  *src
                </label>
                <br />
                {errors.src && (
                  <p className="text-red-500 text-xs">
                    please enter a valid src
                  </p>
                )}
                <input
                  {...register("src", {
                    required: true
                  })}
                  className="border w-full rounded-sm px-3 py-1"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  *serial number
                </label>
                <br />
                {errors.serialNumber && (
                  <p className="text-red-500 text-xs">
                    please enter a valid serial number
                  </p>
                )}
                <input
                  type="number"
                  {...register("serialNumber", {
                    required: true
                  })}
                  className="border w-full rounded-sm px-3 py-1"
                />
              </div>
              <div className="w-full">
                <label className="text-xs" htmlFor="">
                   *week
                </label>
                <div>
                  {
                    course?.map(cr => <div>
                      <div className="text-primarymain font-bold">{cr.name}</div>
                      <div>
                        {
                          cr.week.map(wk => <div onClick={()=>setWeek({name : wk.name, id : wk.id})} className={`px-3 py-2 mb-3 border cursor-pointer shadow-md ${wk.id === week?.id ? "bg-primarymain" : "bg-white"}`}>{wk.name}</div>)
                        }
                      </div>
                    </div>)
                  }
                </div>
              </div>
            
              {success ? (
                <div className="bg-green-600 text-white flex py-1 mt-5 rounded-md text-md px-3">
                  <span className="mr-2 my-auto">
                    <MdDone />
                  </span>
                  {success}
                </div>
              ) : (
                <div>
                  {!loading ? (
                    <input
                      type="submit"
                      className="bg-primarymain hover:cursor-pointer text-white px-3 hover:bg-blue-700 py-1 rounded-sm mt-5"
                    />
                  ) : (
                    <button
                      className="bg-blue-400 py-1 text-white px-3 mt-5 rounded-sm hover:cursor-wait"
                      disabled
                    >
                      Processing...
                    </button>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default AddVideo;
