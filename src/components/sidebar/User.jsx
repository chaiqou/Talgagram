import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DefaultAvatar from "../../images/avatars/default.png";

const User = ({ username, fullname }) => {
  console.log(username, fullname);
  return !username || !fullname ? (
    <Skeleton height={61} count={1} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={DefaultAvatar}
          alt="profile"
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullname}</p>
      </div>
    </Link>
  );
};

export default User;
