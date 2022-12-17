import React,{useState, useEffect} from 'react'
import Layout from '../components/shared/Layout'
import axios from 'axios'
import CourseCard from '../components/myclass/CourseCard';
import useAuth from '../Hooks/useAuth';
import Loading from '../components/shared/Loading';
import PrivateRoute from '../private/PrivateRoute';

function Myclass() {
  const [course, setCourse] = useState([]);
  const {setLoading, loading} = useAuth();
  useEffect(() =>{
    setLoading(true)
    axios.get("https://learn-with-nazir-server-run.onrender.com/api/v1/course")
    .then((res)=>{
      setCourse(res.data.body)
    })
    .finally(()=> setLoading(false))
  },[])
  return (
    <PrivateRoute>
        <Layout>
            <div className='container my-20 px-5 xl:px-0 xl:max-w-screen-lg mx-auto'>
              {
                loading ?
                <Loading />
                :
                <div className='lg:grid grid-cols-3 gap-5'>
                   {
                    // @ts-ignore
                    course.map(cr => <CourseCard name={cr?.name} id={cr._id} description={cr.description}  />)
                   }
                </div>
              }
            </div>
        </Layout>
    </PrivateRoute>
  )
}

export default Myclass