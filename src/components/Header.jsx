import React, { useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { FcHome } from "react-icons/fc";
import Logo from "../images/logo.png";
import { MdExitToApp } from "react-icons/md";

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD}>
                <img src={Logo} className="w-14 h-14" />
              </Link>
            </h1>
          </div>
          <div className="text-grey-700 flex items-center text-center align-items">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD}></Link>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => firebase.auth().signOut()}
                >
                  <MdExitToApp className="w-full h-8 text-blue-900" />
                </button>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button className="bg-blue-900 font-bold text-sm rounded text-white w-20 h-8">
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button className=" font-bold text-sm rounded text-blue-900 w-20 h-8">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
