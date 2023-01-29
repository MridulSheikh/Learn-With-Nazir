import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../../Hooks/useAuth";
import MessengerCustomerChat from "react-messenger-customer-chat";

function Navigation() {
  const [open, setOpen] = useState<boolean>(false);
  const { user, logout } = useAuth();
  return (
    <>
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
            <Link to="/myclass">
              <p className="mx-5 transition duration-300 ease-in-out hover:text-primarymain">
                My Classes
              </p>
            </Link>
            <Link to="/suport">
              <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
                Suport
              </p>
            </Link>
            <Link to="/feedback">
              <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
                feedback
              </p>
            </Link>
            <Link to="/blog">
              <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
                Blog
              </p>
            </Link>
            {user?.role === "admin" && (
              <Link to="/dashboard">
                <p className="mr-5 transition duration-300 ease-in-out hover:text-primarymain">
                  Dashboard
                </p>
              </Link>
            )}
            {user?.email ? (
              <div className="flex items-center">
                <button
                  className={`p-1 border-4 rounded-full ${
                    user?.role === "admin" && "border-blue-200"
                  }`}
                >
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
                  className="ml-3 bg-primarymain px-3 py-2 font-normal rounded-full text-md text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/login">
                  <button className="mx-2 bg-primarymain text-white px-5 py-2 rounded-full">
                    Login
                  </button>
                </Link>
                <Link to="/registration">
                  <button className="mx-2 border-2 border-primarymain px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-primarymain hover:text-white">
                    Registration
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        {open && (
          <div className="fixed transition xl:hidden duration-300 ease-in-out bg-white text-center w-screen h-screen text-md font-bold text-hscolor">
            <Link to="/myclass">
              <p className="transition mt-10 duration-300 ease-in-out hover:text-primarymain">
                My Classes
              </p>
            </Link>
            <Link to="/suport">
              <p className="transition mt-5 duration-300 ease-in-out hover:text-primarymain">
                Suport
              </p>
            </Link>
            <Link to="/blog">
              <p className="transition mt-5 duration-300 ease-in-out hover:text-primarymain">
                Blog
              </p>
            </Link>
            {user?.role === "admin" && (
              <Link to="/dashboard">
                <p className="transition mt-5 duration-300 ease-in-out hover:text-primarymain">
                  Dashboard
                </p>
              </Link>
            )}
            {user?.email ? (
              <div>
                <button
                  className={`p-1 block mx-auto border-4 rounded-full mt-5 ${
                    user?.role === "admin" && "border-blue-200"
                  }`}
                >
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
            ) : (
              <div className="text-center mt-5">
                <Link to="/login">
                  <button className="bg-primarymain text-white px-5 py-2 rounded-full">
                    Login
                  </button>
                </Link>
                <br />
                <Link to="/registration">
                  <button className="mt-2 border-2 border-primarymain px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-primarymain hover:text-white">
                    Registration
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      <MessengerCustomerChat
        pageId="117897214535539"
        appId="1345283516296096"
      />
    </>
  );
}

export default Navigation;
