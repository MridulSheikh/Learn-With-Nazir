import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import DashboardLayout from "./DashboardLayout";
import axios from "axios";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import Loading from "../../components/shared/Loading";
import { MdDone } from "react-icons/md";

type formInfo = {
  name: string;
  description: string;
  no: number;
};

// you can use React.forwardRef to pass the ref too

function AddWeek() {
  const { loading, setLoading } = useAuth();
  const [course, setCourse] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formInfo>();
  const [success, setSuccess] = useState<string>();
  const [courseName, setCourseName] = useState<string>();

  const submit = (data: formInfo) => {
    setLoading(true);
    const body = {
      name: data.name,
      description: data.description,
      no: data.no,
      course : courseName
    };
    axios
      .post("http://localhost:5000/api/v1/week", body)
      .then((res) => {
        setSuccess(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/course").then((res) => {
      setCourse(res.data.body);
    });
  }, []);

  return (
    <DashboardLayout>
      <div className="mt-5">
        <div className="text-2xl font-bold text-center">Add week</div>
        <div className="flex justify-center mt-5">
          <form onSubmit={handleSubmit(submit)} className=" w-full md:w-1/2">
            <div className="w-full">
              <label className="text-xs" htmlFor="name">
                *Name
              </label>
              <br />
              {errors.name && (
                <div className="text-red-500 text-xs">name field required</div>
              )}
              <input
                className="border rounded-md px-3 py-2 text-sm w-full"
                {...register("name", { required: true })}
                type="text"
              />
            </div>
            <div className="w-full mt-5">
              <label className="text-xs" htmlFor="description">
                *description
              </label>
              <br />
              {errors.description && (
                <div className="text-red-500 text-xs">
                  description field required
                </div>
              )}
              <textarea
                rows={17}
                className="border text-xs rounded-md px-3 py-2 w-full"
                {...register("description", { required: true })}
              />
            </div>
            <div className="w-full mt-5">
              <label className="text-xs">*course</label>
              <br />
              <div className="w-full">
                {course?.map((cr) => (
                  <div
                    onClick={() =>
                      setCourseName({
                        // @ts-ignore
                        name: cr?.name,
                        // @ts-ignore
                        id: cr?._id,
                      })
                    }
                    className={`mt-3 w-full px-3 py-1 rounded-md hover:cursor-pointer ${
                        // @ts-ignore
                      courseName?.name === cr?.name ? "bg-primarymain" : "bg-slate-300"
                    }`}
                  >
                    {
                      // @ts-ignore
                      cr.name
                    }
                  </div>
                ))}
              </div>
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
                type={`number`}
                className="border text-xs rounded-md px-3 py-2 w-full"
                {...register("no", { required: true })}
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
  );
}

export default AddWeek;
