import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState(null);

  // nested ternary operator
  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="flex flex-col rounded">
      <div className="text-sm flex items-center justify-between align-items mb-2"></div>
      <p className="text-bold text-gray-base">Suggestions for you</p>
    </div>
  ) : null;
};

export default Suggestions;
