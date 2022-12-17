import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../components/shared/Loading";
import ManageWeekCard from "../../components/dashboard/ManageWeekCard";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

type inProps = {
  name: string;
  _id: string;
  no: number;
  course: {
    name: string;
    id: string;
  };
  description: string;
  video: [
    {
      name: string;
      id: string;
    }
  ];
};

function ManageWeek() {
  const [week, setWeek] = useState<inProps[]>();
  const { loading, setLoading } = useAuth();
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/v1/week")
      .then((res) => {
        setWeek(res.data.body);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="mt-5">
          <div className="text-2xl font-bold text-center">Manage weeks</div>
          {loading ? (
            <Loading />
          ) : (
            <div className="bg-white h-screen overflow-y-scroll rounded-md shadow-md p-5 mt-5">
              <div className="grid lg:grid-cols-8 bg-primarymain py-2 px-2 text-white mb-2">
                <div className=" col-span-1">No</div>
                <div className="col-span-3">name</div>
                <div className="col-span-3">course</div>
                <div className="col-span-1 flex justify-end text-2xl">
                  <Link to="/dashboard/week/add">
                    <button><AiOutlinePlusCircle /></button>
                  </Link>
                </div>
              </div>
              {week?.map((wk) => (
                <ManageWeekCard
                  name={wk?.name}
                  id={wk._id}
                  video={wk.video}
                  no={wk.no}
                  course={wk.course}
                />
              ))}
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
}

export default ManageWeek;
