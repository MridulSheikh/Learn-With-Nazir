import React, { useState } from 'react'
import Layout from '../components/shared/Layout'
import {useForm, SubmitHandler} from 'react-hook-form'
import axios from "axios"
import useAuth from '../Hooks/useAuth'

type Inputs = {
   text : string
}

function Ratting() {
const [feedback, setFeedback] = useState<string>()
const {user  : users} = useAuth()
const [loading, setLoading] = useState<Boolean>(false)
const [success, setSuccess] = useState<string>()
const [error, setError] = useState<string>()
const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()

const onSubmit: SubmitHandler<Inputs> = (data) =>{
  setLoading(true)
  const body = {
    body : data.text,
    user : {
      name : users.name,
      email : users.email,
      gender : users.gender
    }
  }
  const url ='http://localhost:5000/api/v1/feedback'
  axios.post(url, body)
  .then(res => {
     alert(res.data.message)
  })
  .catch(error => {
    alert(error.response.data.message)
  })
  .finally(()=>setLoading(false))
}
  return (
    <div className='bg-white'>
        <Layout>
            <div className='container xl:grid md:gap-6 grid-cols-2 pt-5 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
                <div>
                  <img src="/img/Feedback.png" className='mx-auto' alt="" />
                </div>
                <div className='mt-5 xl:mt-0'>
                  <div className='text-5xl xl:text-5xl font-semibold'>WE WANT YOUR</div>
                  <div className='text-5xl xl:text-8xl font-semibold text-primarymain'>FEEDBACK</div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {
                      errors.text &&
                      <p className='text-red-700 text-sm my-2'>Please enter you feedback</p>
                    }
                    <textarea className="border-2 rounded-2xl w-full h-48 p-5" {...register("text", {required : true})} ></textarea>
                    {!loading ? (
                  <input
                    className="bg-primarymain py-1 text-white w-full mt-5 rounded-sm"
                    type="submit"
                  />
                ) : (
                  <button
                    className="bg-blue-400 py-1 text-white w-full mt-5 rounded-sm"
                    disabled
                  >
                    Processing.....
                  </button>
                )}
                  </form>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Ratting