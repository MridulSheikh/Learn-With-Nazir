import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../components/shared/Loading";
import { Link } from "react-router-dom";
import CoureseCardmanage from "../../components/dashboard/CoureseCardmanage";

type courseInfo = {
  name: string;
  description: string;
  no: number;
  _id: string;
  week: [
    {
      name: string;
      no: number;
      id: string;
    }
  ];
  user: [
    {
      name: string;
      id: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
};

function CourseManagement() {
  const [coures, setCourse] = useState<courseInfo[]>();
  const { setLoading, loading } = useAuth();
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://learn-with-nazir-server-run.onrender.com/api/v1/course")
      .then((res) => {
        setCourse(res.data.body);
      })
      .finally(() => setLoading(false));
  }, []);

  const refresh = () => {
    setLoading(true);
    axios
      .get("https://learn-with-nazir-server-run.onrender.com/api/v1/course")
      .then((res) => {
        setCourse(res.data.body);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <DashboardLayout>
        {loading ? (
          <Loading />
        ) : (
          <div className="mt-5">
            <div className="text-2xl font-bold text-center text-hscolor">
              Manage your course
            </div>
            <div className="my-5 flex gap-5">
              <Link to="/dashboard/course/add">
                <button className="bg-primarymain text-white px-3 py-2 text-xs rounded-full hover:bg-blue-600 ">
                  Add course
                </button>
              </Link>
              <button
                onClick={refresh}
                className="bg-green-500 text-white px-3 py-2 text-xs rounded-full hover:bg-green-600 "
              >
                refresh
              </button>
            </div>
            <div>
              <div className=" relative h-screen overflow-y-scroll bg-white shadow-md rounded-md p-5">
                <div className="grid grid-cols-3 bg-primarymain text-white px-3 py-2 text-center">
                  <div>Name</div>
                  <div>No</div>
                  <div>Total enrolled</div>
                </div>
                {coures?.map((cr) => (
                  <CoureseCardmanage
                    _id={cr._id}
                    name={cr.name}
                    description={cr.description}
                    no={cr.no}
                    week={cr.week}
                    student={cr.user.length}
                    refresh={refresh}
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

export default CourseManagement;
