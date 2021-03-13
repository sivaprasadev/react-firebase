import React from "react";

const Main = ({handleLogOut}) => {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleLogOut}>Signout</button>
    </div>
  );
};

export default Main;
