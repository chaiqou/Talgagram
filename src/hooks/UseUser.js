import { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

const UseUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  useEffect(() => {
    // am funqciit gvinda mivigot user data firebasedan user idze dayrdnobit
    async function getUserObjectById() {
      const [response] = await getUserByUserId(user.uid);

      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjectById();
    }
  }, [user]);
  return { user: activeUser };
};

export default UseUser;
