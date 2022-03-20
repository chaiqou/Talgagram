import React, { useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { FcHome } from "react-icons/fc";
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
                <FcHome className="w-full h-8 " />
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
                  <button>Log In</button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button>SIgn Up</button>
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
