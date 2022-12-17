import axios from "axios";
import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { FiEdit2, FiEye } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import DashboardLayout from "../../pages/Dashboard/DashboardLayout";
import Loading from "../shared/Loading";

type videoType = {
  name: string;
  src: string;
  serialNumber: number;
  week: {
    name: string;
    id: string;
  };
  author: {
    name: string;
    email: string;
  };
  updatedAt : string
};

type formType = {
  name: string,
  src : string,
  serialNumber: number,
}

function UpdateVideo() {
  const { id } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formType>();
const {loading, setLoading, user} = useAuth()
const [pendng, setPending] = useState<boolean>(false);
const [isVew, setIsVew] = useState<boolean>(false);
const [success, setSuccess] = useState<string>()
const [video, setVideo] = useState<videoType>()


useEffect(()=>{
  setLoading(true)
  axios.get(`https://learn-with-nazir-server-run.onrender.com/api/v1/video/${id}`)
  .then(res => {
    setVideo(res.data.body)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=>setLoading(false))
},[])

const submit = (data : formType ) =>{
  setPending(true)
  const body = {
    name : data.name,
    serialNumber : data.serialNumber,
    src : data.src,
    author : {
      name : user.name,
      email : user.email
    }
  }
  axios.patch(`https://learn-with-nazir-server-run.onrender.com/api/v1/video/${id}`,body)
  .then(res => setSuccess(res.data.message))
  .catch(error => console.log(error))
  .finally(()=>setPending(false))
}

  return (
    <div>
      <DashboardLayout>
        <div>
          <div>
            {loading ? (
              <Loading />
            ) : (
              <div className="flex justify-center mt-5">
                <form
                  onSubmit={handleSubmit(submit)}
                  className=" w-full md:w-1/2"
                >
                  <div
                    onClick={() => setIsVew(!isVew)}
                    className={`text-2xl ${
                      isVew && "text-primarymain"
                    } mb-5 flex gap-1 hover:cursor-pointer items-center`}
                  >
                    <div>{!isVew ? <FiEdit2 /> : <FiEye />}</div>
                    <div className="text-sm">
                      {!isVew ? "vew mode" : "edite mode"}
                    </div>
                  </div>
                  <div>
                    <div>{video?.author.email}</div>
                    <div className="mt-1 mb-5 text-xs text-smallthin">
                      {
                        // @ts-ignore
                        new Date(video?.updatedAt).toLocaleString()
                      }
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-xs" htmlFor="name">
                      *name
                    </label>
                    <br />
                    {errors.name && (
                      <div className="text-red-500 text-xs">
                        name field required
                      </div>
                    )}
                    <input
                      defaultValue={video?.name}
                      disabled={!isVew ? true : false}
                      className="border rounded-md px-3 py-2 text-sm w-full"
                      {...register("name", { required: true })}
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs" htmlFor="name">
                      *src
                    </label>
                    <br />
                    {errors.src && (
                      <div className="text-red-500 text-xs">
                        source field required
                      </div>
                    )}
                    <input
                      defaultValue={video?.src}
                      disabled={!isVew ? true : false}
                      className="border rounded-md px-3 py-2 text-sm w-full"
                      {...register("src", { required: true })}
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs" htmlFor="name">
                      *serial number
                    </label>
                    <br />
                    {errors.serialNumber && (
                      <div className="text-red-500 text-xs">
                        serial number field required
                      </div>
                    )}
                    <input
                      defaultValue={video?.serialNumber}
                      disabled={!isVew ? true : false}
                      className="border rounded-md px-3 py-2 text-sm w-full"
                      {...register("serialNumber", { required: true })}
                      type="number"
                    />
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
                      {!pendng ? (
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
            )}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default UpdateVideo;
