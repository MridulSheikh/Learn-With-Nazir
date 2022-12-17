import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FiEdit2, FiEye } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import DashboardLayout from '../../pages/Dashboard/DashboardLayout'
import Loading from "../shared/Loading";
import { title } from "process";

type blogType = {
    title: string;
    slug: string;
    body: string;
    _id: string;
    author: {
      name: string;
      email : string;
      id: string;
    };
    createdAt: string;
    updatedAt: string;
  }

type fromType ={
    title: string;
    body: string;
  }

function UpdateBlog() {
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm<fromType>();
  const {id} = useParams()
  const {loading, setLoading, user} = useAuth()
  const [pendng, setPending] = useState<boolean>(false);
  const [isVew, setIsVew] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>()
  const [blog, setBlog] = useState<blogType>()
  
  useEffect(()=>{
     axios.get(`https://learn-with-nazir-server-run.onrender.com/api/v1/blog/${id}`)
     .then(res => {
        setBlog(res.data.body)
     })
  },[])

  const submit = (data : fromType) => {
    setPending(true)
    const body = {
        title : data.title,
        body : data.body,
        author : {
            name : user.name,
            id : user._id,
            email : user.email
        }
    }
    axios.patch(`https://learn-with-nazir-server-run.onrender.com/api/v1/blog/${id}`, body)
    .then(res => {
        setSuccess(res.data.message)
    })
    .catch(error => {
        console.log(error)
  })
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
              <form onSubmit={handleSubmit(submit)} className=" w-full md:w-1/2">
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
                    <div>{blog?.author.email}</div>
                    <div className="mt-1 mb-5 text-xs text-smallthin">{
                    // @ts-ignore
                    new Date(blog?.updatedAt).toLocaleString()}</div>
                </div>
                <div className="w-full">
                  <label className="text-xs" htmlFor="name">
                    *title
                  </label>
                  <br />
                  {errors.title && (
                    <div className="text-red-500 text-xs">
                      title field required
                    </div>
                  )}
                  <input
                    defaultValue={blog?.title}
                    disabled={!isVew ? true : false}
                    className="border rounded-md px-3 py-2 text-sm w-full"
                    {...register("title", { required: true })}
                    type="text"
                  />
                </div>
                <div className="w-full mt-5">
                  <label
                    defaultValue={blog?.body}
                    className="text-xs"
                    htmlFor="description"
                  >
                    *body
                  </label>
                  <br />
                  {errors.body && (
                    <div className="text-red-500 text-xs">
                      description field required
                    </div>
                  )}
                  <textarea
                    defaultValue={blog?.body}
                    rows={17}
                    disabled={!isVew ? true : false}
                    className="border text-xs rounded-md px-3 py-2 w-full"
                    {...register("body", { required: true })}
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
  )
}

export default UpdateBlog