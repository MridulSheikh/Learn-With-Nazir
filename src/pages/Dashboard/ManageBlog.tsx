import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "./DashboardLayout";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ManageBlogCard from "../../components/dashboard/ManageBlogCard";
import Loading from "../../components/shared/Loading";

type blogInfo = {
  title: string;
  slug: string;
  body: string;
  _id: string;
  author: {
    name: string;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
};

function ManageBlog() {
  const [blog, setBlog] = useState<blogInfo[]>();
  const { loading, setLoading } = useAuth();
  const [searchValue, setSearchValue] = useState<string>()

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/v1/blog`)
      .then((res) => {
        setBlog(res.data.body);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);
  const resetBlog = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/v1/blog")
      .then((res) => {
        setBlog(res.data.body);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  const searchvalue = () =>{
    setLoading(true);
    const filterBlog = blog?.filter(bg => bg.title === searchValue)
    setBlog(filterBlog)
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
              Manage Blog
            </div>
            <div className="bg-white flex justify-between rounded-full shadow-md md:w-5/12 mx-auto mt-5">
              <input
                onBlur={e => setSearchValue(e.target.value)}
                type="text"
                placeholder="Enter title for search blog"
                className="px-3 rounded-full w-full"
              />
              <button onClick={searchvalue} className="bg-primarymain text-white px-3 py-2 rounded-full hover:bg-blue-600 ">
                search
              </button>
            </div>
            <button onClick={resetBlog} className="bg-green-500 text-white text-xs p-3 rounded-md">refresh</button>
            <div className="bg-white p-5 rounded-md shadow-md mt-5">
              <div className="grid lg:grid-cols-8 bg-primarymain py-2 px-2 text-white mb-2">
                <div className="col-span-4">Name</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1">Edit</div>
                <div className="flex justify-end text-2xl col-span-1">
                  <Link to="/dashboard/blog/add">
                    <button>
                      <AiOutlinePlusCircle />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="overflow-y-scroll h-screen">
                {blog?.map((bg) => (
                  <ManageBlogCard
                    name={bg?.title}
                    id={bg?._id}
                    date={bg?.updatedAt}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </DashboardLayout>
    </div>
  );
}

export default ManageBlog;
