import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { MdDone } from "react-icons/md";

type courseInfo = {
  name: string;
  _id: string;
  no: number;
  description: string;
  week: [
    {
      name: string;
      no: number;
      id: string;
    }
  ];
  student: number;
  refresh : any
};

type courseInput = {
  name: string;
  description: string;
};

function CoureseCardmanage({
  name,
  _id,
  no,
  description,
  week,
  student,
  refresh
}: courseInfo) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<courseInput>();
  const onSubmit = (data: courseInput) => {
    setLoading(true);
    axios
      .patch(`http://localhost:5000/api/v1/course/${_id}`, data)
      .then((res) => {
        setSuccess(res.data.message);
      })
      .catch((error) => {
        setError(error.response.data.messgae);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="grid grid-cols-3 bg-primarymain text-white px-3 py-2 mt-5 text-center hover:bg-blue-700"
      >
        <div className="text-sm">{name}</div>
        <div>{no}</div>
        <div>{student}</div>
      </div>
      {open && (
        <div className="absolute top-0 bg-white w-full h-full">
          <button onClick={() => setOpen(!open)} className="m-10 text-hscolor">
            <ImCross />
          </button>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-10 mx-auto"
          >
            <div className="text-2xl font-bold">{name}</div>
            <div className="mb-5 mt-2 text-sm text-smallthin">
              {description}
            </div>
            <div className="mb-5 mt-2">
              <div className="text-sm text-smallthin">weeks : </div>
              <div>
                {week.map((wk) => (
                  <div className="mt-1 font-semibold text-hscolor">
                    {" "}
                    <span>{no} : </span> {wk.name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-smallthin" htmlFor="">
                Name
              </label>
              <br />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  Please enter a valid name
                </p>
              )}
              <input
                defaultValue={name}
                {...register("name", { required: true })}
                type="text"
                className="border-2 w-full p-1 rounded-md"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm text-smallthin" htmlFor="">
                Description
              </label>
              <br />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  Please enter a description name
                </p>
              )}
              <textarea
                defaultValue={description}
                {...register("description", { required: true })}
                className="border-2 w-full p-1 rounded-md min-h-96"
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
      )}
    </div>
  );
}

export default CoureseCardmanage;
