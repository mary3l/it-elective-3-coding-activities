import React from "react";
import useUser from "../hooks/useUser";

const Component3 = () => {
  const { user } = useUser();

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export default Component3;
