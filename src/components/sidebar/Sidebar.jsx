import React from "react";
import UseUser from "../../hooks/UseUser";
import Suggestions from "./Suggestions";
import User from "./User";

const Sidebar = () => {
  const {
    user: { fullname, username, userId },
  } = UseUser();

  return (
    <div className="p-4">
      <User username={username} fullname={fullname} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default React.memo(Sidebar);
