import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import axios from 'axios'
import useAuth from '../Hooks/useAuth'
import Loading from '../components/shared/Loading'

interface blogObj {
  _id : string;
  title : string;
  slug: string;
  body : string;
  author : {
    name: string;
    email: string;
    id: string;
  };
  createdAt : string;
  updatedAt : string;
}

function BlogDetails() {
    const {id} = useParams()
    const [blog, setBlog] = useState<blogObj>()
    const {loading, setLoading} = useAuth()
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://learn-with-nazir-server-run.onrender.com/api/v1/blog/${id}`)
        .then(res => {
          setBlog(res.data.body)
        })
        .finally(()=>setLoading(false))
    },[])
  return (
    <div>
        <Layout>
            <div className='container pt-5 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
              {
                loading ? 
                <Loading />
                :
                <div className='bg-white shadow-md max-w-screen-md mx-auto rounded-md p-7'>
                    <div className='text-xl font-bold'>{blog?.title}</div>
                    <div className='mt-5'>
                      <img src="/img/blogimg.jpg" className='w-full' alt="blog image" />
                    </div>
                    <div className='gap-16 text-xs font-semibold text-hscolor mt-5'>
                      <div>{blog?.author.email}</div>
                      <div>{
                        // @ts-ignore
                      new Date(blog?.createdAt).toLocaleString()}</div>
                    </div>
                    <div className='text-sm mt-5'>
                      {blog?.body}
                    </div>
                </div>
              }
                
            </div>
        </Layout>    
    </div>
  )
}

export default BlogDetails