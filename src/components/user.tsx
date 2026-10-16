import React from "react";
import { UserContext } from "../context/userContext";

export default function User() {
  const context = React.useContext(UserContext);

  const { user } = context;

  console.log(context);

  return (
    <>
      {user && (
        <>
          <p>{user.name ? user.name : "user is not logged In"}</p>
          <p>{user.email ? user.email : "user is not logged In"}</p>
        </>
      )}
    </>
  );
}
