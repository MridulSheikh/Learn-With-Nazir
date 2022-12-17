import React, { useState, useEffect } from "react";
import Layout from "../shared/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import VieoCard from "./VieoCard";
import useAuth from "../../Hooks/useAuth";
import Loading from "../shared/Loading";

function Vidoe({ children }: any) {
  const { id } = useParams();
  const [week, setWeek] = useState({});
  const [loading, setLoading] = useState<Boolean>(false)
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://learn-with-nazir-server-run.onrender.com/api/v1/week/${id}`)
      .then((res) => {
        setWeek(res.data.body);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <Layout>
        {loading ? (
          <Loading />
        ) : (
          <div className="container max-w-sm md:max-w-lg xl:max-w-screen-lg mx-auto">
            <div className="mt-5 text-xl px-5 lg:px-0 md:text-3xl font-bold">
              {
                // @ts-ignore
                week.name
              }
            </div>
            <div className="xl:grid grid-cols-5 mt-5 md:gap-6">
              <div className="col-span-3">{children}</div>
              <div className="col-span-2">
                <div className="p-5 rounded-md border shadow-md bg-white overflow-y-scroll h-96 lg:mt-0 mt-5">
                  {
                    // @ts-ignore
                    week?.video?.map((vd) => (
                      <VieoCard id={vd.id} name={vd.name} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default Vidoe;
