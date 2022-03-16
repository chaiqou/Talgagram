import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";

const UseAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userAuth"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // tu gvaqvs authUser am authusiers vatavsebt localStorageshi
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // tu ar gvaqvs userr mashin gavwmindot local storage
        localStorage.removeItem("authUser");
        setUser(null);
      }
      return () => listener();
    });
  }, [firebase]);

  return { user };
};

export default UseAuthListener;
