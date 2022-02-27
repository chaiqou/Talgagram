import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import LoginVideo from "../images/background.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Talgagram";
  }, []);

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={LoginVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-indigo">
          <div className="shadow-2xl">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
