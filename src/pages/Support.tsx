import { useState } from "react";
import Layout from "../components/shared/Layout";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { MdDone } from "react-icons/md";

type Inputs = {
  email: String;
  reason: String;
};

function Support() {
  const { user} = useAuth();
  const [loading, setLoading] = useState<Boolean>(false)
  const [response, setResponse] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setResponse("");
    setLoading(true);
    const url = `http://localhost:5000/api/v1/support`;
    const body = {
      email: data.email,
      reason: data.reason,
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      },
    };
    axios
      .post(url, body)
      .then((res) => {
        setResponse(res.data.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <Layout>
        <div className="container md:grid grid-cols-3 px-5 xl:px-0 xl:max-w-screen-lg mx-auto mt-6 rounded-md shadow-md overflow-hidden">
          <div className="col-span-1 flex">
            <img src="/img/support.jpg" className="w-full" alt="" />
          </div>
          <div className="bg-white col-span-2 p-6">
            <div>
              <div>* we are send you an email after reciving you message </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2">
                  <label className="text-sm" htmlFor="">
                    *Email -{" "}
                    <span className="text-xs text-primarymain">
                      Google Meet
                    </span>
                  </label>
                  <br />
                  <input
                    type="email"
                    className="border px-2 py-1 rounded-md w-full mt-1"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm" htmlFor="">
                    *reason
                  </label>
                  <br />
                  <textarea
                    className="border px-2 py-1 rounded-md w-full h-28 "
                    {...register("reason", { required: true })}
                  />
                </div>
                {response ? (
                  <div className="bg-green-600 text-white flex py-1 mt-5 rounded-md text-md px-3">
                    <span className="mr-2 my-auto">
                      <MdDone />
                    </span>
                    {response}
                  </div>
                ) : (
                  <div>
                    {!loading ? (
                      <input
                        className="bg-primarymain py-1 text-white w-full mt-5 rounded-sm"
                        type="submit"
                      />
                    ) : (
                      <button
                        className="bg-blue-400 py-1 text-white w-full mt-5 rounded-sm"
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
        </div>
      </Layout>
    </div>
  );
}

export default Support;
