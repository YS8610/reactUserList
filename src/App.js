import React, { useState } from "react";
import AddUser from "./components/AddUser";
import Userslist from "./components/Userslist";

function App() {
  const [userArrayP, setuserArrayP] = useState([]);

  const onAddUserHandler = (user) => {
    setuserArrayP((prev) => {
      console.log([...prev, user]);
      return [...prev, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <Userslist userInfo={userArrayP} />
    </div>
  );
}

export default App;
