import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Vidoe from "../components/myclass/Vidoe";
import axios from "axios";

function Discription() {
  const { id } = useParams();
  const [week, setWeek] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/week/${id}`).then((res) => {
      setWeek(res.data.body);
    });
  }, []);
  return (
    <div>
      <Vidoe>
        <div className={`px-5 xl:px-0`}>
          {
            // @ts-ignore
            week?.description
          }
        </div>
      </Vidoe>
    </div>
  );
}

export default Discription;
