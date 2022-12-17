import React, { useState, useEffect } from "react";
import { AiFillPlayCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

interface props {
  id: string;
  name: string;
}

function VieoCard({ id, name }: props) {
  const { id: ids, play } = useParams();
  return (
    <div>
      <Link to={`/video/${ids}/${id}`}>
        <div
          className={`mb-5 flex px-1 py-2 rounded-md ${
            play === id && "bg-primarymain text-white"
          }`}
        >
          {play === id ? 
            <span className="mr-2 text-2xl">
              <AiFillPlayCircle />
            </span>
            :
            <span className="mr-2 text-2xl">
              <AiOutlineVideoCamera />
            </span>
          }
          {name}
        </div>
      </Link>
    </div>
  );
}

export default VieoCard;
