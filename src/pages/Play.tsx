import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Vidoe from "../components/myclass/Vidoe";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/shared/Loading";

function Play() {
  const { play } = useParams();
  const [plays, setPlays] = useState({});
  const [loading, setLoading] = useState<Boolean>(false)
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/v1/video/${play}`)
      .then((res) => {
        setPlays(res.data.body);
      })
      .finally(() => setLoading(false));
  },[play]);
  return (
    <div>
      <Vidoe>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className="">
              <iframe
                className="w-full h-80 "
                src={
                  // @ts-ignore
                  `https://www.youtube.com/embed/${plays?.src}`
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="mt-5 px-5 lg:px-0 ">
                📢
                <span className="text-yellow-700">
                  {" "}
                  next, prev feature comming soon
                </span>
              </div>
            </div>
          )}
        </div>
      </Vidoe>
    </div>
  );
}

export default Play;
