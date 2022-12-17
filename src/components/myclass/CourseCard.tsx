import React from "react";
import { Link } from "react-router-dom";

interface props {
  name: string;
  id: string;
  description: string;
}

function CourseCard({ name, id, description }: props) {
  return (
    <div className="bg-white shadow-md rounded-md">
      <div>
        <img src="/img/woman.jpg" className="w-full h-full" alt="course img" />
      </div>
      <div className="flex justify-end w-full">
      <div className="z-40 top-7  p-3 ">
        <div className="font-semibold">{name}</div>
        <div className="text-xs mt-2">{description}</div>
        <Link to={`/week/${id}`}>
            <button className="mt-3 border-2 px-3 rounded-md bg-primarymain hover:bg-blue-700 text-white">continue</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default CourseCard;
