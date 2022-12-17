import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/shared/Layout";
import axios from "axios";
import WeekCard from "../components/myclass/WeekCard";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/shared/Loading";

function Week() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const { loading, setLoading } = useAuth();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://learn-with-nazir-server-run.onrender.com/api/v1/course/${id}`)
      .then((res) => {
        setCourse(res.data.body);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <Layout>
        {loading ? (
          <Loading />
        ) : (
          <div className="xl:max-w-screen-lg mx-auto container px-5 xl:px-0">
            {
              // @ts-ignore
              course?.week?.length === 0 ? (
                <div className='container flex justify-center items-center mx-auto w-full my-44'>
                <div className='text-center'>
                    <div className='text-5xl mb-5'>WEEK NOT <span className='text-primarymain'>FOUND</span></div>
                    <div className='hover:underline'>
                    <Link to="/myclass">Please back to class</Link>
                    </div>
                </div>
            </div>
              ) : (
                <div>
                  <div className="text-3xl font-semibold mt-5">
                    {
                      // @ts-ignore
                      course?.name
                    }
                  </div>
                  <div>
                    <div className="mt-10 h-96 overflow-y-scroll md:px-3 rounded-md bg-blue-100">
                      {
                        // @ts-ignore
                        course?.week?.map((wk) => (
                          <WeekCard name={wk.name} id={wk.id} />
                        ))
                      }
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        )}
      </Layout>
    </div>
  );
}

export default Week;
