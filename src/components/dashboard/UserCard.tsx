import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

type userInfo = {
  name: string;
  email: string;
  _id: string;
  gender: string;
  role: string;
  status: string;
  course: [
    {
      name: string;
      id: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
  callUser : any
};

function UserCard({
  name,
  email,
  _id,
  gender,
  role,
  status,
  course,
  createdAt,
  updatedAt,
  callUser,
}: userInfo) {
  const [clicked, setClicked] = useState(false);
  const [success, setSuccess] = useState<string>();
  const { loading, setLoading } = useAuth();
  const handleRole = () => {
    setSuccess("");
    setLoading(true);
    const body = {
      role: role === "admin" ? "client" : "admin",
    };
    axios
      .patch(`http://localhost:5000/api/v1/user/${email}`, body)
      .then((res) => {
        setSuccess(res.data.message);
        callUser()
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="border border-t-0 boder-l-0 border-r-0 border-l-0 py-3 grid grid-cols-2 md:grid-cols-4 ">
      <div className="flex items-center">{name}</div>
      <div className="flex items-center">{role}</div>
      <div className="flex items-center">{email}</div>
      <div>
        <div className="flex justify-end">
          {loading ? (
            <button
              className="bg-blue-400 text-white p-2 mt-5 rounded-md text-xs"
              disabled
            >
              Processing.....
            </button>
          ) : (
            <div>
              {role === "client" ? (
                <button
                  onClick={handleRole}
                  className="bg-primarymain text-xs text-white p-2 rounded-md hover:bg-blue-600"
                >
                  make admin
                </button>
              ) : (
                <button
                  onClick={handleRole}
                  className="bg-red-500 text-xs text-white p-2 rounded-md hover:bg-red-600"
                >
                  remove admin
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
