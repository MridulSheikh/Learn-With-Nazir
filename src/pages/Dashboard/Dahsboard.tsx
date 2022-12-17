import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import axios from "axios";
import UserCard from "../../components/dashboard/UserCard";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../components/shared/Loading";

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
};

function Dahsboard() {
  const [user, setUser] = useState<userInfo[]>();
  const { loading, setLoading } = useAuth();
  const [searchemail, setSearchEmail] = useState<string>()
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://learn-with-nazir-server-run.onrender.com/api/v1/user")
      .then((res) => {
        setUser(res.data.body);
      })
      .finally(() => setLoading(false));
  }, []);
  const callUser = () => {
    setLoading(true);
    axios
      .get("https://learn-with-nazir-server-run.onrender.com/api/v1/user")
      .then((res) => {
        setUser(res.data.body);
      })
      .finally(() => setLoading(false));
  };

  const searchUser = (e : any) => {
        if(!searchemail){
            alert("please enter email")
            return;
        }
        const users : userInfo[] = [];
        setLoading(true)
        e.preventDefault()
        axios.get(`https://learn-with-nazir-server-run.onrender.com/api/v1/user/${searchemail}`)
        .then(res => {
           users.push(res.data.body)
           setUser(users)
        })
        .catch(error => {
            alert(error.response.data.messgae)
        })
        .finally(() => setLoading(false))
  }

  return (
    <DashboardLayout>
      <div className="mt-5">
        <div className="text-center font-bold text-xl">Manage user</div>
        <div className="bg-white flex justify-between rounded-full shadow-md md:w-5/12 mx-auto mt-5">
          <input
            type="text"
            placeholder="Enter Email-address"
            className="px-3 rounded-full w-full"
            onBlur={(e)=> setSearchEmail(e.target.value)}
          />
          <button onClick={searchUser} className="bg-primarymain text-white px-3 py-2 rounded-full hover:bg-blue-600 ">
            search
          </button>
        </div>
        <div></div>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className="bg-white rounded-md shadow-md mt-5 p-5 h-screen overflow-y-scroll">
              {user?.map((usr) => (
                <UserCard
                  name={usr.name}
                  email={usr.email}
                  key={usr._id}
                  _id={usr._id}
                  gender={usr.gender}
                  role={usr.role}
                  status={usr.status}
                  course={usr.course}
                  createdAt={usr.createdAt}
                  updatedAt={usr.updatedAt}
                  callUser={callUser}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dahsboard;
