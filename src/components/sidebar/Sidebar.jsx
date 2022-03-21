import React from "react";
import UseUser from "../../hooks/UseUser";
import Suggestions from "./Suggestions";
import User from "./User";

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = UseUser();

  console.log(fullName, username, userId);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default Sidebar;
