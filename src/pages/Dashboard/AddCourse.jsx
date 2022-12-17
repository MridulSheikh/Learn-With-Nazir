import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MdDone } from "react-icons/md";

function AddCourse() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('')
  const handleOnSubmit = (data) => {
    setLoading(true)
    axios.post("http://localhost:5000/api/v1/course", data)
    .then(res => {
        setSuccess(res.data.message)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=>setLoading(false))
  };
  return (
    <div>
      <DashboardLayout>
        <div className="p-10 rounded-md bg-white shadow-md w-2/4 mt-10">
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div>
              <label className="text-xs" htmlFor="">
                *Name
              </label>
              <br />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  please enter a valid name
                </p>
              )}
              <input
                {...register("name", { required: true })}
                className="border w-full rounded-sm px-3 py-1"
              />
            </div>
            <div className="mt-3">
              <label className="text-xs" htmlFor="">
                *Description
              </label>
              <br />
              {errors.description && (
                <p className="text-red-500 text-xs">
                  please enter a description
                </p>
              )}
              <textarea
                {...register("description", { required: true })}
                rows="10"
                className="w-full text-sm border rounded-sm px-3 py-1"
              />
            </div>
            <div className="mt-3">
              <label className="text-xs" htmlFor="">
                *No
              </label>
              <br />
              {errors.no && (
                <p className="text-red-500 text-xs">
                  please enter serial number
                </p>
              )}
              <input
                {...register("no", { required: true })}
                className="border w-full rounded-sm px-3 py-1"
                type={`number`}
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
      </DashboardLayout>
    </div>
  );
}

export default AddCourse;
