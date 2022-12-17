import React, {useState} from 'react'
import DashboardLayout from './DashboardLayout'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import useAuth from '../../Hooks/useAuth'
import { MdDone } from 'react-icons/md'

type fromInfo = {
    title : string,
    slug : string,
    body : string,
}

function AddBlog() {
    const {handleSubmit, register, formState : {errors}} = useForm<fromInfo>()
    const [success, setSuccess] = useState<string>()
    const {loading, setLoading, user} = useAuth()
    
    const handleOnSubmit = (data : fromInfo) => {
        setLoading(true)
        const body = {
            title : data.title,
            slug : data.slug,
            body : data.body,
            author : {
                name : user.name,
                email : user.email,
                id : user._id
            }
        }
         axios.post("http://localhost:5000/api/v1/blog/", body)
         .then(res => {
            setSuccess(res.data.message)
         })
         .catch(error => {
            console.log(error.response.data.message)
         })
         .finally(()=>setLoading(false))
    }

  return (
    <div>
        <DashboardLayout>
            <div className='mt-5'>
                <div className='text-center font-bold text-hscolor text-2xl'>Add blog</div>
                <div>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div>
              <label className="text-xs" htmlFor="">
                *Name
              </label>
              <br />
              {errors.title && (
                <p className="text-red-500 text-xs">
                  please enter a valid title
                </p>
              )}
              <input
                {...register("title", { required: true, minLength : 10, maxLength : 100 })}
                className="border w-full rounded-sm px-3 py-1"
              />
            </div>
            <div>
              <label className="text-xs" htmlFor="">
                *slug
              </label>
              <br />
              {errors.slug && (
                <p className="text-red-500 text-xs">
                  please enter a valid slug
                </p>
              )}
              <input
                {...register("slug", { required: true, minLength : 10, maxLength : 100 })}
                className="border w-full rounded-sm px-3 py-1"
              />
            </div>
            <div className="mt-3">
              <label className="text-xs" htmlFor="">
                *body
              </label>
              <br />
              {errors.body && (
                <p className="text-red-500 text-xs">
                  please enter a body
                </p>
              )}
              <textarea
                {...register("body", { required: true })}
                rows={20}
                className="w-full text-sm border rounded-sm px-3 py-1"
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
  )
}

export default AddBlog