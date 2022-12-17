import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import axios from 'axios'
import useAuth from '../Hooks/useAuth';
import Loading from '../components/shared/Loading';

interface BlogType {
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

function Blog() {
  const [blog, setBlog] = useState<BlogType[]>([])
  const {setLoading , loading} = useAuth()
  const [length, setLenght] = useState(1)
  const [page, setPage] = useState(1)
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/api/v1/blog?limit=6&page=${page}`)
    .then(res => {
      setBlog(res.data.body)
      setLenght(res.data.size)
    })
    .finally(()=>setLoading(false))
  },[page])

  const handlePaginate = (l : string) => {
        if(l==="next"){
              if(page >  Math.ceil(length / 6)){
                setPage(1)
                return;
              }
            setPage(page + 1)
        }
        if(l==="prev"){
          if(page === 1){
            setPage(Math.ceil(length / 6))
            return;
          }
        setPage(page - 1)
    }
  }
  return (
    <div>
        <Layout>
        <div className='text-center mt-6 text-3xl font-semibold'>Blogs</div>
        {
          loading ? 
          <Loading />
          :
          <div className='container md:grid grid-cols-3 gap-7 pt-16 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
          {
            blog?.map(bg=> <Link to={`/blog/${bg._id}`}>
              <div className='rounded-md overflow-hidden shadow-md mt-3 md:mt-0'>
                <div>
                  <img src="/img/blogimg.jpg" alt="blogimg.jpg" />
                </div>
                <div className='p-5'>
                  <div>{bg.title}</div>
                  <div className='flex justify-between text-xs mt-5 text-smallthin'>
                    <div>{bg.author.name}</div>
                  <div className=''>{
                        // @ts-ignore
                      new Date(bg?.createdAt).toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </Link>)
          }
        </div>
        }
          <div className='flex gap-5 w-full justify-center xl:max-w-screen-lg mx-auto container pt-16'>
            <button onClick={()=>handlePaginate("prev")} className="bg-primarymain text-white px-3 py-1">prev</button>
            <div>
              {page}
              <span> of </span>
              {Math.ceil(length / 6)}
            </div>
            <button onClick={()=>handlePaginate("next")} className="bg-primarymain text-white px-3 py-1">next</button>
          </div>
        </Layout>
    </div>
  )
}

export default Blog