import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function DashboardNavigation() {
    const [open, setOpen] = useState<boolean>(false);
  const { user, logout } = useAuth()
  return (
    <div className="py-3 bg-white z-50 drop-shadow-sm sticky  top-0">
    <div className="flex justify-between container px-5 xl:px-0 xl:max-w-screen-lg mx-auto">
      <div>
        <Link to="/">
          <img src="/img/logo.png" alt="logo" className="w-16 m-auto" />
        </Link>
      </div>
      <button
        className="xl:hidden text-2xl text-primarymain transition duration-300 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        <GiHamburgerMenu />
      </button>
      <div className="hidden xl:flex justify-between items-center text-md font-bold text-hscolor">
        <Link to="/dashboard">
          <p className="mx-5 transition duration-300 ease-in-out hover:text-primarymain">
            dashboard
          </p>
        </Link>
        <Link to="/dashboard/course">
          <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
            course
          </p>
        </Link>
        <Link to="/dashboard/week">
          <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
            week
          </p>
        </Link>
        <Link to="/dashboard/blog">
          <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
            blog
          </p>
        </Link>
        <Link to="/dashboard/video">
            <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
              video
            </p>
          </Link>
          <div className="flex items-center">
            <button className={`p-1 border-4 rounded-full ${user?.role === "admin" && 'border-blue-200'}`}>
              <div className="w-18 h-18 rounded-full overflow-hidden">
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  className="w-7"
                  alt="user"
                />
              </div>
            </button>
            <button
              onClick={logout}
              className="ml-3 bg-primarymain px-3 py-2 font-normal rounded-full text-md text-white hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
      </div>
    </div>
    {open && (
      <div className="fixed transition xl:hidden duration-300 ease-in-out bg-white text-center w-screen h-screen text-md font-bold text-hscolor">
        <Link to="/dashboard">
          <p className="transition mt-10 duration-300 ease-in-out hover:text-primarymain">
            dashboard
          </p>
        </Link>
        <Link to="/dashboard/course">
          <p className="transition mt-5 duration-300 ease-in-out hover:text-primarymain">
            course
          </p>
        </Link>
        <Link to="/dashboard/week">
          <p className="transition mt-5 duration-300 ease-in-out hover:text-primarymain">
            week
          </p>
        </Link>
        <Link to="/dashboard/blog">
          <p className="transition mt-5 duration-300 ease-in-out hover:text-primarymain">
            blog
          </p>
        </Link>
        <Link to="/dashboard/video">
          <p className="transition mt-5 duration-300 ease-in-out hover:text-primarymain">
            video
          </p>
        </Link>
          <div>
            <button className={`p-1 block mx-auto border-4 rounded-full mt-5 ${user?.role === "admin" && 'border-blue-200'}`}>
              <div className={`w-18 h-18 rounded-full overflow-hidden`}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  className="w-7"
                  alt="user"
                />
              </div>
            </button>
            <button
              onClick={logout}
              className="bg-primarymain mt-5 px-3 py-2 font-normal rounded-full text-md text-white"
            >
              Logout
            </button>
          </div>
      </div>
    )}
  </div>
  )
}

export default DashboardNavigation