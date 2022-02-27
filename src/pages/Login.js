import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

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

  return <div className=" text-2xl text-blue-600">Login</div>;
};

export default Login;
