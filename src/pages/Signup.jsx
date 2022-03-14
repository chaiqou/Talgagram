import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import SignupVideo from "../images/signup.mp4";
import * as ROUTES from "../constants/routes";

const Signup = () => {
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const isInvalid =
    password === "" || email === "" || username === "" || fullname === "";
  const history = useHistory();

  // handle sign Up

  const handleSignup = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.title = "Sign Up - Talgagram";
  }, []);

  return (
    <div className="flex justify-start shadow-none items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={SignupVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div>
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <form onSubmit={handleSignup} method="POST">
              <input
                aria-label="Enter your username"
                placeholder="Username"
                type="text"
                autoComplete="on"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-cyan-900 
                overflow-hidden  mb-2 font-bold"
              />
              <input
                aria-label="Enter your full name"
                placeholder="Full Name"
                type="text"
                autoComplete="on"
                value={fullname}
                required
                onChange={(e) => setFullname(e.target.value)}
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-cyan-900
                overflow-hidden  mb-2 font-bold"
              />
              <input
                aria-label="Enter your email addres"
                placeholder="Email"
                type="text"
                autoComplete="on"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-cyan-900 
                overflow-hidden  mb-2 font-bold"
              />
              <input
                aria-label="Enter your password"
                placeholder="Password"
                type="password"
                autoComplete="on"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-cyan-900
                overflow-hidden  mb-2 font-bold"
              />
              <button
                type="submit"
                disabled={isInvalid}
                className={`text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                ${isInvalid && "cursor-not-allowed opacity-50"}
                
                `}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
