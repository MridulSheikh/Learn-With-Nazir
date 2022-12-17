import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../components/shared/Loading";
import { FiEdit2, FiEye } from "react-icons/fi";
import { MdDone } from "react-icons/md";

type fromType = {
  name: string;
  description: string;
  no: number;
};

type stateType = {
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
  createdAt: string;
  updateAt: string;
};

function EditWeek() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<fromType>();
  const [week, setWeek] = useState<stateType>();
  const { loading, setLoading } = useAuth();
  const [pendng, setPending] = useState<boolean>(false);
  const [isVew, setIsVew] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>()
  const { id } = useParams();

  // fetch data
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://learn-with-nazir-server-run.onrender.com/api/v1/week/${id}`)
      .then((res) => {
        setWeek(res.data.body);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // update data
  const submit = (data : fromType) => {
   setPending(true)
   axios.patch(`https://learn-with-nazir-server-run.onrender.com/api/v1/week/${id}`, data)
   .then(res => {
     setSuccess(res.data.message)
   })
  }
  return (
    <div>
      <DashboardLayout>
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
                <div className="w-full">
                  <label className="text-xs" htmlFor="name">
                    *Name
                  </label>
                  <br />
                  {errors.name && (
                    <div className="text-red-500 text-xs">
                      name field required
                    </div>
                  )}
                  <input
                    defaultValue={week?.name}
                    disabled={!isVew ? true : false}
                    className="border rounded-md px-3 py-2 text-sm w-full"
                    {...register("name", { required: true })}
                    type="text"
                  />
                </div>
                <div className="w-full mt-5">
                  <label
                    defaultValue={week?.description}
                    className="text-xs"
                    htmlFor="description"
                  >
                    *description
                  </label>
                  <br />
                  {errors.description && (
                    <div className="text-red-500 text-xs">
                      description field required
                    </div>
                  )}
                  <textarea
                    defaultValue={week?.description}
                    rows={17}
                    disabled={!isVew ? true : false}
                    className="border text-xs rounded-md px-3 py-2 w-full"
                    {...register("description", { required: true })}
                  />
                </div>
                <div className="w-full mt-5">
                  <label className="text-xs" htmlFor="no">
                    *No
                  </label>
                  <br />
                  {errors.no && (
                    <div className="text-red-500 text-xs">
                      number field required
                    </div>
                  )}
                  <input
                    defaultValue={week?.no}
                    type={`number`}
                    disabled={!isVew ? true : false}
                    className="border text-xs rounded-md px-3 py-2 w-full"
                    {...register("no", { required: true })}
                  />
                </div>
                <div className="mt-5">
                  <label className="text-xs" htmlFor="course">
                    *course
                  </label>
                  <br />
                  <input
                    defaultValue={week?.course.name}
                    disabled
                    className="border text-xs rounded-md px-3 py-2 w-full"
                  />
                </div>
                <div className="w-full mt-5">
                  <label className="text-xs" >videos : </label>
                  {week?.video.map((vd) => (
                    <input
                    defaultValue={vd.name}
                    disabled
                    className="border text-xs rounded-md px-3 py-2 w-full mt-1"
                  />
                  ))}
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
      </DashboardLayout>
    </div>
  );
}

export default EditWeek;
